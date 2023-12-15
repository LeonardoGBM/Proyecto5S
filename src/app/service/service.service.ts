import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  emit(falsae: any) {
    throw new Error('Method not implemented.');
  }
  
  public api = "http://localhost:8081/api/usuario/"
  constructor(private http: HttpClient) { }
//Metodo para Enlistar datos
  public datos():Observable<any>{
    return this.http.get<any>(this.api)
  };

  $modal = new EventEmitter<any>();
//Metodo para Agregar datos
  public agregarDato(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api, data, httpOptions)
    .pipe(
      catchError((error: any) => {
        console.error('Error al agregar el dato:', error);
        throw error;
      })
    );
  }
// Metodo para Eliminar datos
  eliminar(id: number): Observable<any> {
    const url = `${this.api}${id}/`;
    console.log('URL de eliminación:', url);
    return this.http.delete(url)
      .pipe(
        catchError((error: any) => {
          console.error('Error al eliminar el libro:', error);
          throw error;
        })
      );
  }
  
 // Método para Editar datos
 public editar(id: number, newData: any): Observable<any> {
  const url = `${this.api}${id}/`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put(url, newData, httpOptions)
    .pipe(
      catchError((error: any) => {
        console.error('Error al editar el dato:', error);
        throw error;
      })
    );
}


}

