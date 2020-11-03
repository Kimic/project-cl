import { Component, OnInit } from '@angular/core';
import { Movimiento, TIPOS } from '../../models/movimiento';
import { MovimientoService } from '../servicios/movimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../categorias/servicios/categoria.service';

@Component({
  selector: 'app-formulario-movimientos',
  templateUrl: './formulario-movimientos.component.html',
  styleUrls: ['./formulario-movimientos.component.css']
})
export class FormularioMovimientosComponent implements OnInit {
  errors: Array<any>;
  movimiento: Movimiento;
  aCategorias: Array<any>;
  aTipos: Array<any>;
  // tslint:disable-next-line: max-line-length
  constructor(public movimientoService: MovimientoService, public categoriaService: CategoriaService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.movimiento = new Movimiento();
    this.aCategorias = [];
    this.aTipos = TIPOS;
    this.errors = [];
    if (this.rutaActiva.snapshot.params.id) {
      // tslint:disable-next-line: radix
      this.movimiento.id = parseInt(this.rutaActiva.snapshot.params.id);
      this.movimientoService.detailMovimiento(this.movimiento.id)
        .subscribe(
            response => this.movimiento = response,
            err => {
              this.errors.push(err.error);
            }
        );
    }
    this.categoriaService.getCategorias('')
      .subscribe(
        response => this.aCategorias = response.content,
        err => {
          this.errors.push(err.error);
        }
      );
  }

  enviar(){
    if (this.movimiento.id != null ) {
      this.movimientoService.editMovimiento(this.movimiento).subscribe((result) => {
        this.router.navigate(['/movimientos']);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.movimientoService.addMovimiento(this.movimiento).subscribe((result) => {
        this.router.navigate(['/movimientos']);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
