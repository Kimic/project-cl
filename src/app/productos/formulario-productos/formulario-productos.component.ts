import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../servicios/producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {
  [x: string]: any;
  producto: Producto;
  constructor(public srvProducto: ProductoService, private rutaActiva: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.producto = new Producto();
    if (this.rutaActiva.snapshot.params.id) {
        // tslint:disable-next-line: radix
        this.producto.id = parseInt(this.rutaActiva.snapshot.params.id);
        this.srvProducto.detailProducto(this.producto.id).subscribe( response => this.producto = response);
    }
  }

  enviar(){
    if (this.producto.id != null ) {
      this.srvProducto.editProducto(this.producto).subscribe((result) => {
        this.router.navigate(['/productos']);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.srvProducto.addProducto(this.producto).subscribe((result) => {
        this.router.navigate(['/productos']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
