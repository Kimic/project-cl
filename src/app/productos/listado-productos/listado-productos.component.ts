import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  [x: string]: any;

  clave: string;
  id: number;
  aProductos: Array<Producto>;
  constructor(public srvProducto: ProductoService, public http: HttpClient) { }

  ngOnInit(): void {
    this.aProductos = [];
    this.clave = '';
    this.srvProducto.getProductos().subscribe( response => this.aProductos = response);
  }

  btnBuscar() {
    console.log('Busqueda de libros');
    this.srvProducto.getProductos().subscribe( response => this.aProductos = response);
  }
}
