import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): Observable<Clientes[]> {
    let response = this.httpClient.get('https://localhost:7086/api/Cliente')
    .pipe(map((clientes:any) => clientes));

  return response;
  }

/*
  createClientes(cliente:Clientes): Observable<any>{
    let response = this.httpClient.post('https://localhost:7086/api/Cliente', cliente);
    return response;
  }
  */
}
