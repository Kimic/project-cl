import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioMovimientosComponent } from './formulario-movimientos/formulario-movimientos.component';
import { MovimientosComponent } from './movimientos.component';


const routes: Routes = [
  { path : '', component: MovimientosComponent},
  { path : 'nuevo', component: FormularioMovimientosComponent},
  { path : 'editar/:id', component: FormularioMovimientosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientosRoutingModule { }
