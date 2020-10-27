import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MovimientosComponent } from './movimientos.component';
import { ListadoMovimientosComponent } from './listado-movimientos/listado-movimientos.component';
import { FormularioMovimientosComponent } from './formulario-movimientos/formulario-movimientos.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MovimientosComponent, ListadoMovimientosComponent, FormularioMovimientosComponent],
  imports: [
    CommonModule,
    MovimientosRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule
  ]
})
export class MovimientosModule { }
