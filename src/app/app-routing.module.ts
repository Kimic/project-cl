import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MovimientosModule } from './movimientos/movimientos.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clientes', loadChildren: () => ClientesModule },
  { path: 'movimientos', loadChildren: () => MovimientosModule },
  { path: 'productos', loadChildren: () => ProductosModule },
  { path: 'categorias', loadChildren: () => CategoriasModule },
  { path: '**', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
