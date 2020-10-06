import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ListadoVdComponent } from './listado-vd/listado-vd.component';


@NgModule({
  declarations: [ProductosComponent, ListadoVdComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
