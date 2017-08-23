import { Component, ViewChild, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

declare var CKEDITOR;
declare var $;

@Component({
  selector: 'app-laudo',
  templateUrl: './laudo.component.html',
  styleUrls: ['./laudo.component.scss']
})
export class LaudoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    CKEDITOR.replace( 'editor1' );
  }

  modalResize() {
    $('#mdl_laudo').toggleClass('min').toggleClass('max')
  }

  modalMinimize() {
    this.modalClose();
  }

  modalClose() {
    this.showDropVNC();
    $('#mdl_laudo').css('visibility', 'hidden');
    $('.laudo-dropdown').css('visibility', 'hidden');

    setTimeout(() => {
      $('#mdl_overlay').css('visibility', 'hidden');
    }, 300)
  }

  showDropVNC() {
    $('.laudo-dropdown').toggleClass('active').toggleClass('inactive');
  }

}
