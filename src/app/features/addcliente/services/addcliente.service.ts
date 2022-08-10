import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Addcliente } from '../models/addcliente';

@Injectable({
  providedIn: 'root'
})
export class AddclienteService {

  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.getAddCliente();
  }

  getAddCliente(): Observable<Addcliente[]> {
    let response = this.httpClient.get('https://localhost:7086/api/Cliente')
    .pipe(map((addcliente:any) => addcliente));

  return response;
  }


  createAddCliente(addcliente:Addcliente): Observable<any>{
    let response = this.httpClient.post('https://localhost:7086/api/Cliente', addcliente);
    return response;
  }

}

