import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { CategoriasComponent } from './categorias.component';
import { FormularioCategoriasComponent } from './formulario-categorias/formulario-categorias.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ListadoCategoriasComponent, CategoriasComponent, FormularioCategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule
]
})
export class CategoriasModule { }
