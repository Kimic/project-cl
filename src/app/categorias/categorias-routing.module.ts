import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { FormularioCategoriasComponent } from './formulario-categorias/formulario-categorias.component';


const routes: Routes = [
  { path: '' , component: CategoriasComponent },
  { path: 'nueva', component: FormularioCategoriasComponent},
  { path: 'editar/:id', component: FormularioCategoriasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
