import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule } from '@angular/forms';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';


@NgModule({
  declarations: [ProductosComponent, ListadoProductosComponent, FormularioProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
