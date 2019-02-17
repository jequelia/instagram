import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/endpoint';

@Injectable({
  providedIn: 'root'
})
export class InstaService {

  /* TODO : comentar todos os méotodos trocar o nome do service */


  constructor( private http : HttpClient) { }

  get(ENDPOINT) : Observable<any>{
    return this.http.get(`${API_URL}${ENDPOINT}`);
  }
  post(ENDPOINT, object: any): Observable<any>{
    return this.http.post(`${API_URL}${ENDPOINT}`, object);
  }
  put(ENDPOINT, id, object): Observable<any>{
    return this.http.put(`${API_URL}${ENDPOINT}/${id}`, object);
  }
  delete(ENDPOINT, id): Observable<any>{
    return this.http.delete(`${API_URL}${ENDPOINT}/${id}`);
  }
}
