import { Component, OnInit } from '@angular/core';

// declare var CKEDITOR;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'WebRIS';

  ngOnInit(): void {
    // CKEDITOR.replace( 'editor1' );
  }
}




