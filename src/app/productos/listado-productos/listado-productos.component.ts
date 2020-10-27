import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../servicios/producto.service';
import { productoMensajes } from '../../mensajes/producto-mensaje';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  errors: [];
  clave: string;
  id: number;
  aProductos: Array<Producto>;
  msn: any;
  constructor(public srvProducto: ProductoService, public http: HttpClient) { }

  ngOnInit(): void {
    this.msn = productoMensajes;
    this.aProductos = [];
    this.clave = '';
    this.srvProducto.getProductos()
      .subscribe(
        response => this.aProductos = response,
        err => {
          console.log(err);
        }
      );
  }


  btnBuscar() {
    console.log('Busqueda de libros');
    this.srvProducto.getProductos().subscribe( response => this.aProductos = response);
  }
}
