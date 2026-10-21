import { HttpClient } from '@angular/common/http';
import { Inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientResponse } from '../interfaces/clients.response';
import { ClientRequest } from '../interfaces/clients.request';

@Service()
export class Clients {

  // constructor(private http: HttpClient){}
  http:HttpClient = Inject(HttpClient)
  url = "http://localhost:5000/clients"

  getAllClient(): Observable<ClientResponse>{
    return this.http.get(`${this.url}/`)
  }

  getOneClient(id:number): Observable<ClientResponse>{
    return this.http.get(`${this.url}/${id}`)
  }


  postClient(data:ClientRequest): Observable<ClientResponse>{
    return this.http.post(`${this.url}/`, data)
  }


  putClient(id:number, data:ClientRequest): Observable<ClientResponse>{
    return this.http.put(`${this.url}/${id}`, data)
  }


  delete(id:number): Observable<ClientResponse>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
