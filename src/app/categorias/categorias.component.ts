import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  template: `
    <app-listado-categorias></app-listado-categorias>
  `,
  styles: [
  ]
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
