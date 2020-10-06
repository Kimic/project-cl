import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  template: `
    <app-listado-productos class="col"></app-listado-productos>
  `,
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
