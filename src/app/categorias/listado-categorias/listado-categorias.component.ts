import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from '../servicios/categoria.service';
import { categoriaMensajes } from '../../mensajes/categoria-mensajes';
import { aplicacionMensajes } from 'src/app/mensajes/aplication-mensaje';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css'],
})
export class ListadoCategoriasComponent implements OnInit {
  aCategorias: Array<Categoria>;
  msn: any;
  msnapp: any;
  nombre: string;
  errors: Array<any>;
  page = 1;
  pageSize = 5;
  constructor(public categoriaService: CategoriaService, private rutaActiva: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.aCategorias = [];
    this.msn = categoriaMensajes;
    this.msnapp = aplicacionMensajes;
    this.nombre = '';
    this.errors = [];
    this.categoriaService.getCategorias(this.nombre)
      .subscribe(
        response => this.aCategorias = response.content,
        err => {
          this.errors.push(err.error);
        }
      );
  }

  buscarCategorias(){
    this.aCategorias = [];
    this.errors = [];
    this.categoriaService.getCategorias(this.nombre)
    .subscribe(
      response => this.aCategorias = response.content,
      err => {
        this.errors.push(err.error);
        console.log(err);
      }
    );
  }

  editar(id: number){
    this.router.navigate([`/categorias/editar/${id}`]);
  }
}
