import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  template: `
    <div class="row">
      <app-listado-vd class="col"></app-listado-vd>
    </div>
  `,
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
