import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../../models/movimiento';
import { MovimientoService } from '../servicios/movimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-movimientos',
  templateUrl: './formulario-movimientos.component.html',
  styleUrls: ['./formulario-movimientos.component.css']
})
export class FormularioMovimientosComponent implements OnInit {
  errors: Array<any>;
  movimiento: Movimiento;
  constructor(public movimientoService: MovimientoService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.movimiento = new Movimiento();
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
