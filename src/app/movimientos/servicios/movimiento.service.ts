import { Injectable } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { configuracion } from 'src/app/models/configuracion';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  urlBase: string;

  constructor(public http: HttpClient) {
    this.urlBase = `${configuracion.urlBase}movimiento`;
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
  addMovimiento(movimiento: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.post(URL, movimiento)
      .pipe(catchError(this.handleError)
    );
  }

  detailMovimiento(id: number): Observable<any> {
    const URL = this.urlBase;
    return this.http.get(URL + '/' + id)
      .pipe(catchError(this.handleError)
    );
  }

  editMovimiento(movimiento: any): Observable<any> {
    const URL = this.urlBase;
    return this.http.put(URL + '/' + movimiento.id, movimiento)
      .pipe(catchError(this.handleError)
    );
  }

 /*  private extractMovimiento(response: any){
    return response.map(movimiento => content.);
  } */
}

