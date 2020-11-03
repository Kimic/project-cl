import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento';
import { MovimientoService } from '../servicios/movimiento.service';
import { movimientoMensajes } from '../../mensajes/movimiento-mensaje';
import { aplicacionMensajes } from '../../mensajes/aplication-mensaje';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-movimientos',
  templateUrl: './listado-movimientos.component.html',
  styleUrls: ['./listado-movimientos.component.css']
})
export class ListadoMovimientosComponent implements OnInit {
  aMovimientos: Array<Movimiento>;
  nombre: string;
  importe: number;
  msn: any;
  msnapp: any;
  errors: Array<any>;
  page = 1;
  pageSize = 5;
  constructor(public movimientoService: MovimientoService, private rutaActiva: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.aMovimientos = [];
    this.msn = movimientoMensajes;
    this.msnapp = aplicacionMensajes;
    this.nombre = '';
    this.importe = 9999999;
    this.errors = [];
    this.movimientoService.getMovimientos(this.nombre, this.importe)
      .subscribe(
        response => this.aMovimientos = response.content,
        err => {
          this.errors.push(err.error);
        }
      );
  }

  buscarMovimientos(){
    this.aMovimientos = [];
    this.errors = [];
    this.movimientoService.getMovimientos(this.nombre, this.importe)
    .subscribe(
      response => this.aMovimientos = response.content,
      err => {
        this.errors.push(err.error);
        console.log(err);
      }
    );
  }
  editar(id: number){
    this.router.navigate([`/movimientos/editar/${id}`]);
  }
}
