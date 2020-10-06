import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { ProductosComponent } from './productos.component';


const routes: Routes = [
  { path: '' , component: ProductosComponent },
  { path: 'nuevo', component: FormularioProductosComponent },
  { path: 'editar/:id', component: FormularioProductosComponent },
  { path: 'detalle/:id', component: FormularioProductosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
