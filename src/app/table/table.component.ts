import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CategoryPipe } from './category.pipe';

import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { GlobalEventBus , FILTER_WORK_LIST, Observer } from '../shared/event-bus/event-bus.service';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Status , StatusArray } from "../shared/worklist/status.enum";
import { UserProfile, UserProfileArray } from "../shared/worklist/user-profiles.enum";
import { WorklistService } from "../shared/worklist/worklist.service";
import { UserPermitionsService } from '../shared/user-permitions/user-permitions.service';

declare var $;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  isDesc = true;
  column = 'atdmt_id';
  direction: number;
  userTableId = 'rodrigo_table-webris';
  userTableOrder = 'rodrigo_tableorder';
  userTableColumnsWidth = 'rodrigo_tableColumnsWidth';
  showFixedHeader = "none";
  isLoading = true;

  rowsFiltered: any = [];
  rows:any = [];
  userProfile = 'Radiologista_ADM';
  state:any = {};
  worklistService:WorklistService;
  isADMUser;
  constructor(
      private http: Http,
      private UserPermitionsService:UserPermitionsService
  ) {
    this.worklistService = new WorklistService();
  }

  ngOnInit() {
    let rows = [
      {
        atdmt_id: '000000000001121',
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 1,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
        paciente: 'Aracy Cabral da Silva',
        medico: 'Dr. George Freire Nunes',
        registro: '31/07 - 19:00',
        realizacao: '31/07 - 09:00',
        mod: 'MR',
        exame: 'Lorem Ipsum',
        rotulo: 'Para Laudar',
        classe: 'laudar',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 2,
        diagnostico: 'Lorem ipsum dolor sit amet.',
        paciente: 'Fernanda Carrozzino Naccaratti',
        medico: 'Dra. Fernanda Meire',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Para Revisar',
        classe: 'revisar',
        setor: 'Principal'
      },
      {
        atdmt_id: 3,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut dolores, eligendi.',
        paciente: 'Ana Carolina Silva',
        medico: 'Dra. Fernanda Meire',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'CT',
        exame: 'Ipsum Lorem',
        rotulo: 'Ditafone',
        classe: 'ditafone',
        setor: 'Principal'
      },
      {
        atdmt_id: 4,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        paciente: 'Francisco Carvalho',
        medico: 'Dr. Fernanda Ávilla',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Registrado',
        classe: 'registrado',
        setor: 'Principal'
      },
      {
        atdmt_id: 5,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla, doloremque.',
        paciente: 'Fernanda Carrozzino Naccaratti',
        medico: 'Dra. Fernanda Meire',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Manuscrito',
        classe: 'manuscrito',
        setor: 'Principal'
      },
      {
        atdmt_id: 6,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        paciente: 'Lourdes da Costa',
        medico: 'Dra. Agustina Lourdes',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Externo',
        classe: 'externo',
        setor: 'Principal'
      },
      {
        atdmt_id: 7,
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut dolores, eligendi.',
        paciente: 'Fernanda Carrozzino Naccaratti',
        medico: 'Dra. Fernanda Meire',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Liberado',
        classe: 'liberado',
        setor: 'Principal'
      },
      {
        atdmt_id: 8,
        diagnostico: 'Lorem ipsum dolor sit amet.',
        paciente: 'Fernanda Carrozzino Naccaratti',
        medico: 'Dra. Fernanda Meire',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Cancelado',
        classe: 'cancelado',
        setor: 'Atendimento'
      },
      {
        atdmt_id: 9,
        diagnostico: 'Lorem ipsum dolor sit amet.',
        paciente: 'George Freire Nunes',
        medico: 'Dra. Aracy Cabral da Silva',
        registro: '01/08 - 19:00',
        realizacao: '01/08 - 22:00',
        mod: 'AB',
        exame: 'Ipsum Lorem',
        rotulo: 'Entregue',
        classe: 'entregue',
        setor: 'Principal'
      }
    ];
    const loggedUserGroup = this.UserPermitionsService.getLoggedUser().groups[0];
    let filter = '';
    if(loggedUserGroup.toLocaleLowerCase() == 'digitador'){
      filter = 'conjuntoStatus=Ditafone,Manuscrito&'
    }
    console.log()
    this.http.get(`/api/v1/worklist?${filter}limit=100`).map(res => res.json()).subscribe(data => {

        data.map(d => {
            return this.aggregateData(d);
        });
        console.log(data);
        this.rows  = this.rowsFiltered = data;
        this.setUpTable();
        this.setUpFilterListenner();

    });
    
    this.isADMUser = this.UserPermitionsService.isADMUser();
  }

  sort(property) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    const direction = this.isDesc ? 1 : -1;
    const customFieldMap = {
      'registro'  :'m_dataRegistro_unix',
      'realizacao':'m_dataRealizacao_unix',
    };

    const found = customFieldMap[property]
    if(found)property = found;
    const tempResult = _.sortBy(this.rowsFiltered, [property]);
    const tempResult2 = _.sortBy(this.rows, [property]);
    if(this.isDesc) {
      this.rowsFiltered = tempResult;
      this.rows = tempResult2;
    }
    else{
      this.rowsFiltered = tempResult.reverse()
      this.rows = tempResult2.reverse();
    }
    //console.log(property);
  }

  openOzirix(canOpenImage, AN) {
    //alert('Abrir OsiriX!');
    console.log("openOzirix", canOpenImage, AN)

    if(canOpenImage) this.openStudtAtOsirix(canOpenImage, AN);

  }

  private openStudtAtOsirix(canOpenImage, AN){
    console.log(`osirix://?methodName=Retrieve&ServerName='DSERVER'&filterKey='AccessionNumber'&filterValue='${AN}'`);
    let newwindow=window.open(`osirix://?methodName=Retrieve&ServerName='DSERVER'&filterKey='AccessionNumber'&filterValue='${AN}'`,'namexpt','height=1,width=1');
    newwindow.blur();
    window.focus();
    setTimeout(()=>{
      newwindow.close();
    },200)
  }

  copiarNome(e) {

    const elementRef = $(e).parent().parent().parent().parent().prev();
    const elementText = elementRef.text();
    console.log(elementText);

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elementRef[0]);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");

    selection.removeAllRanges();
  }

  private setUpTable(){
    setTimeout( () => {
      //const selector = '.table-webris';
      let   isDragging = false;
      let   currentElementDragging = undefined;
      const tableId = '#' + this.userTableId;
      const tableRef = document.getElementById(tableId);
      let   totalTHsWidth = 0;
      const OriginalWidthArr = [];
      let   OriginalPosition = undefined;
      let   OriginalTableWidth = undefined;
      const OriginalWidthMap = {};
      const FixedHeaderId = '#table_fixed';
      let   OriginalFixedHeader = 0;

      //computeTableState(); // Eu Tirei , preciso testar
      this.state = {
        tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap
      };
      this.setupDraggableTable(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap);

      $('.grip').mousedown((e) => {

        this.computeTableState(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap);

        const el = $(e.target);

        if(el[0])isDragging = true;
        currentElementDragging = el[0];
        OriginalPosition = el.position();
        if(OriginalPosition)OriginalPosition = OriginalPosition.left;
        console.log($(currentElementDragging).attr('id') , "was clicked");
        $('body').css('cursor', 'ew-resize');

      });

      $('body').mouseup(() => {
        $('body').css('cursor', 'default');
        isDragging = false;
        currentElementDragging = undefined;
        this.computeTableState(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap);
        this.updateFixedHeaderContent();
      });

      $(document).mousemove(function(event){

        if(isDragging && currentElementDragging){

          const thParentIndex  = $(currentElementDragging).parent().parent().attr('id')
          const foundWidthIndex = OriginalWidthMap[thParentIndex];
          const originalWidth = OriginalWidthArr[foundWidthIndex];

          $("#debug").text("event.pageX: "+ event.pageX + " originalWidth: " + originalWidth + " el: " + currentElementDragging);
          //console.log("originalWidth", originalWidth, "shift", (event.pageX - OriginalPosition ));
          //$('#' + currentElementDragging).parent().width((event.pageX - originalWidth )+ "px");
          let shift = (event.pageX - OriginalPosition );
          console.log("originalWidth + shift " , originalWidth + shift );
          $(currentElementDragging).parent().parent().width((originalWidth + shift )+ "px");
          //computeTableState();

          $(tableId).width((OriginalTableWidth + shift) + "px" );
          $(FixedHeaderId).width(OriginalFixedHeader + shift + "px");
        }
      });

      this.updateFixedHeaderContent();

      $( 'article' ).scroll(() => {
        let valueOfHeadertop = $("#rodrigo_table-webris > thead").position().top;
        console.log(valueOfHeadertop);
        //$("#table_fixed").css({top: 353 - 40});
        if(valueOfHeadertop <= 300){
          console.log("mostra");
          if( this.showFixedHeader == "none") {

            this.showFixedHeader = "block";

          }
        }else{
          if(this.showFixedHeader == "block") this.showFixedHeader = "none";
        }
      });

      setTimeout(() => {
        const savedTableColunmWidth = eval('(' + window.sessionStorage.getItem(this.userTableColumnsWidth) + ')');
        $(tableId + ' > thead > tr > th').each((i, e)=>{
          if(savedTableColunmWidth){
            let ew = savedTableColunmWidth[i];
            $(e).width(ew);
          }
        }).promise().done(()=>{
          this.updateFixedHeaderContent();
          //computeTableState();
          setTimeout(() => {

            this.isLoading = false;

            setTimeout(()=>{
              const v = $("#rodrigo_table-webris").width();
              $(".alert-busca").width(v - 50);
              //this.isLoading = false;
            }, 200)
          }, 1000);
        });
      }, 200);
    }, 500);
  }

  private setUpFilterListenner(){
    GlobalEventBus.registerObserver(FILTER_WORK_LIST , {
            notify: fulltextSearchData => {
                console.log('Recebido', fulltextSearchData );

                if (fulltextSearchData) {
                    this.rowsFiltered = this.rows.filter(r => {
                        const filterFields: any = {
                            fullTextSearch: undefined,
                            date: undefined,
                            status: undefined,
                            modalidade: undefined
                        };
                        if (fulltextSearchData.fullTextSearch === '') {
                            filterFields.fullTextSearch = r;
                            // fulltextSearchData.fullTextSearch = true;
                        }else if (typeof fulltextSearchData.fullTextSearch === 'string') {
                          for (const key in r) {
                            if (r.hasOwnProperty(key)) {
                              // console.log("key", key)
                              const value = r[key];
                              if (value && typeof value === 'string') {
                                if (fulltextSearchData.fullTextSearch && fulltextSearchData.fullTextSearch !== '') {
                                  if (value.toLowerCase().indexOf(fulltextSearchData.fullTextSearch.toLowerCase()) > -1) {
                                      // return r;
                                      filterFields.fullTextSearch = r;
                                  }
                                }
                              }
                            } // END FOR KEY
                          }
                        }

                        if (fulltextSearchData.data) {
                          const dateField = fulltextSearchData.data.dateField;
                          const m_date = moment(r[dateField].data, 'DD/MM/YYYY');
                          const m_date_unix = m_date.hours(0).minutes(0).seconds(1).unix();

                          const receivedDataObj = fulltextSearchData.data.value;
                          if (receivedDataObj !== 'all') {
                              if (typeof receivedDataObj === 'number') {
                                  if (m_date_unix > receivedDataObj) {
                                      // return r;
                                      filterFields.date = r;
                                  }
                              }else {
                                  if (m_date_unix >= receivedDataObj.from && m_date_unix <= receivedDataObj.to) {
                                      // return r;
                                      filterFields.date = r;
                                  }
                              }
                          }else {
                              // return r;
                              filterFields.date = r;
                          }
                        }

                        if(fulltextSearchData.status){
                          const onlyTrue = fulltextSearchData.status.filter( s => s.checked);
                          const onlyName = onlyTrue.map(s => s.nome);
                          if(onlyName.indexOf(r.nome_status) > -1){
                            filterFields.status = r;
                          }
                        }

                        if(fulltextSearchData.modalidade){
                          const onlyTrue = [];
                          for(let key in fulltextSearchData.modalidade){
                            const value = fulltextSearchData.modalidade[key];
                            if(value.checked){
                              onlyTrue.push(key)
                            }
                          }
                          if(onlyTrue.indexOf(r.modalidade) > -1){
                            filterFields.modalidade = r;
                          }
                        }

                        let numberOfFoundFields = 0;
                        _.values(fulltextSearchData).forEach(value => {
                            if (value || value === '') {
                                numberOfFoundFields++;
                            }
                        });
                        if (numberOfFoundFields > 0) {
                            let x = 0;
                            for (const key in filterFields) {
                                if (filterFields[key]) {
                                  x++;
                                }
                            }

                            if (x === numberOfFoundFields) {
                                // console.log("nome_pct", r.nome_pct, "registro", r.registro.data);
                                return r;
                            }
                        }
                    });
                    //this.setupDraggableTableCached(); // Estudar mais sobre
                }
            }
        });
  }

  private setupDraggableTableCached(){
    //Criei pq a tabela estava apresentando bugs no ato de Filter e Busca,
    //possivelmente por causo do component de draggeble
    //Usei essa funcao para "re-desenhar" a cada busca
    let {tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap} = this.state;

    this.setupDraggableTable(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap);

    console.log("setupDraggableTableCached")
  }

  private setupDraggableTable(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap){
    const selector = '#' + this.userTableId;
    $(selector).dragtable({
      maxMovingRows: 1,
      dragaccept: '.accept',
      dragHandle: '.some-handle',
      persistState: (table) => {
          if (!window.sessionStorage) return;
          var ss = window.sessionStorage;
          table.el.find('th').each(function(i) {
            if(this.id != '') {table.sortOrder[this.id]=i;}
          });
          ss.setItem(this.userTableOrder, JSON.stringify(table.sortOrder));
          this.updateFixedHeaderContent();
          this.computeTableState(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap);
      },
      restoreState: eval('(' + window.sessionStorage.getItem(this.userTableOrder) + ')')
    });
  }

  private computeTableState(tableId,FixedHeaderId, OriginalWidthArr,OriginalWidthMap){
    let totalTHsWidth = 0;
    let OriginalTableWidth = $(tableId).width();
    let OriginalFixedHeader = $(FixedHeaderId).width();
    OriginalWidthArr.splice(0, OriginalWidthArr.length);

    $(tableId + ' > thead > tr > th').each((i, e)=>{
      let ew = $(e).width();
      if(ew){
        totalTHsWidth += ew;
        OriginalWidthArr.push(ew);
        OriginalWidthMap[$(e).attr('id')] = i;
      }
    }).promise().done(()=>{
      // console.log("totalTHsWidth" ,totalTHsWidth);
      // console.log("OriginalWidthArr -> 0", OriginalWidthArr[0]);
      // console.log("OriginalTableWidth ->", OriginalTableWidth);

      // console.log("OriginalWidthMap", OriginalWidthMap);
      // console.log("OriginalWidthArr",OriginalWidthArr);
      window.sessionStorage.setItem(this.userTableColumnsWidth, JSON.stringify(OriginalWidthArr));
    });
  }

  openLaudoModal() {
    $('#mdl_overlay').css('visibility', 'visible');
    setTimeout(() => {
      $('#mdl_laudo').css('visibility', 'visible');
    }, 300)
  }
  private updateFixedHeaderContent(){
    const originalContent = $("#rodrigo_table-webris > thead").html();
    $('#table_top_fixed > thead').html(originalContent);
  }

  private aggregateData(data) {
    const m_dataRegistro = moment(data.data_atend);
    const m_dataRealizacao = moment(data.DataChegada);

    const m_dataRegistro_unix = m_dataRegistro.unix();
    const m_dataRealizacao_unix = m_dataRealizacao.unix();

    const dataRegistro = m_dataRegistro.format('DD/MM/YYYY');
    const horaRegistro = moment(data.data_atend).add('3', 'hours').format('HH:mm');

    const dataRealizacao = moment(data.DataChegada).format('DD/MM/YYYY');
    const horaRealizacao = moment(data.DataChegada).add('3', 'hours').format('HH:mm');

    const registro =  {
        'data': dataRegistro,
        'hora': horaRegistro + 'h'
    };
    if (registro.data === 'Invalid date') {
        registro.data = '';
        registro.hora = '';
    }
    const realizacao = {
        'data': dataRealizacao,
        'hora': horaRealizacao + 'h'
    };
    if (realizacao.data === 'Invalid date') {
        realizacao.data = '';
        realizacao.hora = '';
    }
    const circulos =  {
        'id': 'id',
        'doc': 'doc',
        'vincular': 'vnc',
        'osirix': 'ozx',
        'web': 'web',
        'laudo': 'ldo'
    };

    let nome_status , nome_status_class;
    nome_status =  nome_status_class = (<String>data.nome_status).toLocaleLowerCase();

    if (nome_status.indexOf('para') > -1) {
        nome_status_class = nome_status.split(' ')[1];
    }
    const status =  {
      'label': nome_status,
      'class': nome_status_class
      // "class": "ditafone"
    };

    let id_atend = data.id_atend;

    let id_atend_arr = id_atend.split('');

    id_atend_arr = id_atend_arr.reverse().splice(0, 9);

    id_atend = id_atend_arr.reverse().join('');

    // console.log(id_atend.length)

    // const atendimento = {
    //   // "num": data.id_atend.split('100000000')[1],
    //   // "num": this.pad(id_atend, 10)
    //   'num': id_atend
    //   // "class": (<String>data.nome_status).toLocaleLowerCase()
    //   // "class": "registrado"
    // };

    // data.registro = registro;
    // data.realizacao = realizacao;
    // data.circulos = circulos;
    // data.status = status;
    // data.atendimento = atendimento;
    // data.dataRealizacao_unix = m_dataRealizacao_unix;
    // data.dataRegistro_unix = m_dataRegistro_unix;

    //  {
    //     atdmt_id: '000000000001121',
    //     diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi, deserunt. Numquam ex ipsa cum facilis modi suscipit. Cumque vitae quidem recusandae perspiciatis repudiandae pariatur voluptatibus quo quasi. Ex, veritatis!',
    //     paciente: 'Aracy Cabral da Silva',
    //     medico: 'Dr. George Freire Nunes',
    //     registro: '31/07 - 19:00',
    //     realizacao: '31/07 - 09:00',
    //     mod: 'MR',
    //     exame: 'Lorem Ipsum',
    //     rotulo: 'Para Laudar',
    //     classe: 'laudar',
    //     setor: 'Atendimento'
    //   },
    data.atdmt_id = id_atend;
    data.diagnostico = '';
    data.paciente = data.nome_pct;
    data.medico = data.nome_rqst;
    //data.registro = registro.data + " - " + registro.hora;
    //data.realizacao = realizacao.data + " - " + realizacao.hora;
    data.registro = registro;
    data.realizacao = realizacao;
    data.mod = data.modalidade;
    data.exame = data.regiao;
    data.rotulo = status.label;
    data.classe = status.class;
    data.setor = data.Setor;
    data.m_dataRealizacao_unix = m_dataRealizacao_unix;
    data.m_dataRegistro_unix = m_dataRegistro_unix;

    data.icons = {
      impressaoDiag: this.displayIcons(1, data, this.userProfile),
      docs: this.displayIcons(2, data, this.userProfile),
      vinculacao: this.displayIcons(3, data, this.userProfile),
      osirix: this.displayIcons(4, data, this.userProfile),
      webViewer: this.displayIcons(5, data, this.userProfile),
      laudo: this.displayIcons(6, data, this.userProfile),
      ditafone: this.displayIcons(7, data, this.userProfile),
    }
  }

  private displayIcons(category, item, userProfile){
    //console.log(item.nome_status, userProfile);
    const statObj:{code:number} = StatusArray[item.nome_status];
    const userProfObj:{code:number} = UserProfileArray[this.userProfile];

    if(statObj && userProfObj){
      const statEnum:Status = statObj.code;
      const UserProfEnum:UserProfile = userProfObj.code;
      if(category == 1) return false;
      if(category == 2) return this.worklistService.showAbrirDocumentos(statEnum, UserProfEnum);
      if(category == 3) return false;
      if(category == 4) return this.worklistService.showAbrirOsirix(statEnum, UserProfEnum);
      if(category == 5) return false;
      if(category == 6) return this.worklistService.showAbrirLaudoIcon(statEnum, UserProfEnum);
      if(category == 7) return this.worklistService.showDitaFoneIcon(statEnum, UserProfEnum);
    }
    return false;
  }

  private pad(n, width, z?) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

}
