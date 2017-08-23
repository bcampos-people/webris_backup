import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {
  
  @Input() item:any = undefined;
  constructor() { }

  ngOnInit() {
  }

}
