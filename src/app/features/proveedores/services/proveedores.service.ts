import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedores } from '../models/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private httpClient: HttpClient) { }
  getProveedores(): Observable<Proveedores[]> {
    let response = this.httpClient.get('https://localhost:7086/api/Proveedores')
    .pipe(map((proveedores:any) => proveedores));

  return response;
  }
