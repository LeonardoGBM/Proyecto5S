import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  emit(falsae: any) {
    throw new Error('Method not implemented.');
  }
  public readonly api = "http://localhost:8080/api/usuario/"
  constructor(private http: HttpClient) { }

  public datos():Observable<any>{
    return this.http.get<any>(this.api)
  };

  $modal = new EventEmitter<any>();
}

