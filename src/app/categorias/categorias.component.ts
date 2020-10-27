import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  template: `
    <app-listado-categorias class="col"></app-listado-categorias>
  `,
  styles: [
  ]
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
