import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Categoria } from '../../models/categoria';
import { configuracion } from '../../models/configuracion';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  aCategoria: Array<Categoria>;
  urlBase: string;
  constructor(public http: HttpClient) {
    this.aCategoria = [];
    this.urlBase = `${configuracion.urlBase}categoria`;
  }

  getMovimientos(nombre: string, importe: number) {
    // tslint:disable-next-line: object-literal-key-quotes
    const params: any = {'nombre': nombre.toLowerCase(), 'importe': importe};
    const URL = this.urlBase;
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.get(URL, {'params': params})
    .pipe(
        map((data: any) => {
          return data;
        })
    );
  }
  getCategorias(nombre: string) {
    // tslint:disable-next-line: object-literal-key-quotes
    const params: any = {'nombre': nombre.toLowerCase()};
    const URL = this.urlBase;
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.get(URL, {'params': params})
    .pipe(
        map((data: any) => {
          return data;
        })
    );
  }

  addCategoria(categoria: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.post(URL, categoria)
      .pipe(catchError(this.handleError)
    );
  }

  detailCategoria(id: number): Observable<any> {
    const URL = this.urlBase;
    return this.http.get(URL + '/' + id)
      .pipe(catchError(this.handleError)
    );
  }

  editCategoria(categoria: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.put(URL + '/' + categoria.id, categoria)
      .pipe(catchError(this.handleError)
    );
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

}
