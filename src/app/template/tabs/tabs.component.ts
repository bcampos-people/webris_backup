
import { Component, ChangeDetectionStrategy, ElementRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { BsDropdownDirective  } from 'ngx-bootstrap';

import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { GlobalEventBus , FILTER_WORK_LIST, Observer } from '../../shared/event-bus/event-bus.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { select } from 'optimal-select';
import { UserPermitionsService } from './../../shared/user-permitions/user-permitions.service';

declare var $;
@Component({
  selector: 'app-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [FormBuilder]
})
export class TabsComponent {
  grupoClinicoList: any;
  modalitiesList: any;

  @ViewChildren(BsDropdownDirective) myDropDown : QueryList<BsDropdownDirective>;

  form;
  dataCombo:any = [];
  state:any = {};
  statusList:any = [];
  dataFieldChecked:string = 'registro';
  inheredFunction:any = {};
  constructor(
    private formBuilder: FormBuilder,
    private http:Http,
    private UserPermitionsService: UserPermitionsService
  ){
    this.form = this.formBuilder.group({
        textoBusca: '',
        formStatus: undefined
    });

    this.inheredFunction = {
      userPerm: this.UserPermitionsService
    }

    this.inheredFunction.userPerm.isADMUser();
  }
  // public tabs: any[] = [
  //   {title: 'Minhas Atividades (10)', content: 'Dynamic content 1', removable: false},
  //   {title: 'Emergências (4)', content: 'Dynamic content 2', removable: false}
  // ];

  ngOnInit(){

    const ref = document.querySelector('body > app-root > app-main-template > section > article');
    ref.addEventListener("scroll", ()=>{
      this.closeAllDropDowns();
    });

    const ref2 = document.querySelector('body > app-root > app-main-template');
    ref2.addEventListener("click", (e)=>{
      //console.log((<any>(e.target)).getAttribute('dropdowntoggle'))
      var selector = select(e.target)
      console.log("selector", selector);

      if(selector.indexOf('open') == -1 &&
        selector.indexOf('.btn-secundary strong') == -1 &&
        selector.indexOf('.flex .selectionButtons') == -1 &&
        selector.indexOf('.open .btn-secundary') == -1 &&
        selector.indexOf('.btn-secundary.dropdown-toggle') == -1 &&
        selector.indexOf('[role="options"]:nth-of-type') == -1

      ) {
        this.closeAllDropDowns();
      }
      return true;
    });

    //const m_today = moment().format('DD/MM/YYYY');
    const m_today = '01/08/2017';
    const m_sunday =  moment(m_today, 'DD/MM/YYYY').day("sunday");
    const m_week_diff = moment(m_today, 'DD/MM/YYYY').diff(m_sunday, 'days');
    this.dataCombo = [
      {label: 'Todos' , value: 'all'},
      {label: 'Hoje'  , value: {
          from: moment(m_today, 'DD/MM/YYYY').hours(0).minutes(0).seconds(0).unix(),
          to:   moment(m_today, 'DD/MM/YYYY').hours(23).minutes(59).seconds(59).unix()
        }
      },
      {label: 'Ontem' , value: {
        from: moment(m_today, 'DD/MM/YYYY').subtract(1,  'days').hours(0).minutes(0).seconds(0).unix(),
        to:   moment(m_today, 'DD/MM/YYYY').subtract(1,  'days').hours(23).minutes(59).seconds(59).unix()
      }},
      {label: 'Semana', value: moment(m_today, 'DD/MM/YYYY').subtract(m_week_diff,  'days').unix()},
      {label: 'Mês'   , value: moment(m_today, 'DD/MM/YYYY').subtract(30, 'days').unix()},
    ];

    this.state = {
      selectedDateItem: this.dataCombo[0],
      filterValues : {
        fullTextSearch: undefined,
        data: undefined,
        status: undefined,
        modalidade: undefined
      },
      status: {
        onlySelected: undefined
      }
    }
    this.form.valueChanges
      .debounceTime(150)
      .subscribe(data => {
        console.log('Sending changes', data);
        //GlobalEventBus.notifyObservers(FILTER_WORK_LIST, { fullTextSearch : data.textoBusca });
        //this.emitFilterWorkListFilterObs(data.textoBusca);
        this.filterBy('fullTextSearch', data.textoBusca);
    });

    this.http.get(`/api/v1/status`).map(res => res.json()).subscribe(data =>{
      this.state.statusListState = []
      data.forEach(s => {
        this.state.statusListState.push({
          nome: s.nome_status,
          checked : true
        })
      });
      // this.form.formStatus = this.formBuilder.array(arr)
      this.statusList = data;
    });

    this.http.get(`/api/v1/modalidades`).map(res => res.json()).subscribe(arrModalidades =>{
      this.state.modalitiesListState = {}
      arrModalidades.forEach(m => {
        this.state.modalitiesListState[m] = {
          checked: true
        };
      })
      this.modalitiesList = arrModalidades;

      this.http.get(`/api/v1/grupoclinico`).map(res => res.json()).subscribe(arrGrupoClinico =>{

        this.grupoClinicoList = _.groupBy(arrGrupoClinico, 'Modalidade');;

      });
    });
  }

  openDatePicker() {
    $('#dt-picker').toggleClass('active').toggleClass('inactive');
  }

  setStatusListSelection(value:boolean){
    this.state.statusListState.forEach(s => {
        s.checked = value
    })
    this.filterBy('status', this.state.statusListState )
  }

  closeMenu(){
    //$("#statusDrop > .btn-group.open").removeClass('open');
    //$("statusDrop > button#data-chooser-shift").attr("aria-expanded","false");

    this.myDropDown.forEach((drop)=>{
        if(drop.isOpen) drop.hide(); // Pode ser alterado pelo funcao abaixo... Verficar....
    })

  }

  filterWorkList(field, item){
    //console.log(field, item);
    //console.log("unix", item.value.unix());
    if(field == 'date'){
      this.state.selectedDateItem = item;
      //if(item.value == 'all')this.filterBy('data', item.value);

      this.filterBy('data', {dateField:  this.dataFieldChecked, value:  item.value});
    }
  }

  filterStatus(statusName, statusState){
    console.log("filterStatus", statusName, statusState);
    this.state.statusListState.forEach(s =>{
      if(s.nome == statusName){
        s.checked = statusState
      }
    });
    this.state.status.onlySelected = this.state.statusListState.filter(s=> s.checked).map(s => s.nome);
    console.log(this.state.statusListState)

    this.filterBy('status', this.state.statusListState )
  }

  filterModalidades(modName, modState){
    console.log(modName, modState);
    for(let key in this.state.modalitiesListState){
      if(key == modName) this.state.modalitiesListState[key] = {checked: modState};
    }

    this.filterBy('modalidade', this.state.modalitiesListState )
  }

  onDateFieldChange(val){

    this.dataFieldChecked = val;
    this.filterWorkList('date', this.state.selectedDateItem)
  }

  private closeAllDropDowns(){
    const arr = [
      'statusDrop',
      'modalidadeDrop'
    ]

    arr.forEach(drop => {
        const ariaExpanded = $('#' + drop  + ' #data-chooser-shift').attr('aria-expanded');
        if(ariaExpanded == 'true') $("#" + drop +" #data-chooser-shift").click();
    })
  }

  private filterBy(field, value){
    if(field == 'fullTextSearch') this.state.filterValues.fullTextSearch = value;
    if(field == 'data') this.state.filterValues.data = value;
    if(field == 'status') this.state.filterValues.status = value;
    if(field == 'modalidade') this.state.filterValues.modalidade = value;

    const {
      fullTextSearch, data, status, modalidade
    } = this.state.filterValues;

    this.emitFilterWorkListFilterObs(fullTextSearch, data, status, modalidade)
  }

  private emitFilterWorkListFilterObs(fullTextSearch?, data?, status?, modalidade?){
    GlobalEventBus.notifyObservers(FILTER_WORK_LIST, { fullTextSearch , data, status, modalidade });
  }

  /*
    addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Digite o nome ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled:false,
      removable:true
    });
  }

  removeTabHandler(tab:any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
  */
}

