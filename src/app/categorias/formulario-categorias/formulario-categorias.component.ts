import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicios/categoria.service';
import { Categoria } from '../../models/categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-categorias',
  templateUrl: './formulario-categorias.component.html',
  styleUrls: ['./formulario-categorias.component.css']
})
export class FormularioCategoriasComponent implements OnInit {
  errors: Array<any>;
  categoria: Categoria;

  constructor(private categoriaService: CategoriaService,  private rutaActiva: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.categoria = new Categoria();
    this.errors = [];

    if (this.rutaActiva.snapshot.params.id) {
      // tslint:disable-next-line: radix
      this.categoria.id = parseInt(this.rutaActiva.snapshot.params.id);
      this.categoriaService.detailCategoria(this.categoria.id)
        .subscribe(
            response => this.categoria = response,
            err => {
              this.errors.push(err.error);
            }
        );
  }
  }

  enviar(){
    if (this.categoria.id != null ) {
      this.categoriaService.editCategoria(this.categoria).subscribe((result) => {
        this.router.navigate(['/categorias']);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.categoriaService.addCategoria(this.categoria).subscribe((result) => {
        this.router.navigate(['/categorias']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
