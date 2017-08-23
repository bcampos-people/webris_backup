import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ResultadoBuscaComponent implements OnInit {

  numReg = 1000;

  public alert: any = [
    {
      type: 'success',
      message: 'Os resultados estão exibindo os ' + this.numReg + ' \
      primeiros registros encontrados.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
