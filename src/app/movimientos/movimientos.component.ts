import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  template: `
      <app-listado-movimientos class="col"></app-listado-movimientos>
  `,
  styles: [
  ]
})
export class MovimientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
