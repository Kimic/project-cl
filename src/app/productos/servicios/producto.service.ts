import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { configuracion } from '../../models/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  aProducto: Array<Producto>;
  urlBase: string;

  constructor(public http: HttpClient) {
    this.aProducto = [];
    this.urlBase = configuracion.urlBase;
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    window.alert(error);
    return throwError(error);
  }

  getProductos() {
    const URL = `${this.urlBase}producto`;
    return this.http.get(URL)
    .pipe(
        map(
          response => this.extractProducto(response)
        )
    );
  }


  addProducto(producto: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.post(URL , producto)
      .pipe(catchError(this.handleError)
    );
  }

  editProducto(producto: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.put(URL + '/' + producto.id, producto)
      .pipe(catchError(this.handleError)
    );
  }

  detailProducto(id: number): Observable<any> {
    const URL = this.urlBase;
    return this.http.get(URL + '/' + id)
      .pipe(catchError(this.handleError)
    );
  }

  private extractProducto(response: any){
    return response.map(producto => producto);
  }
}
