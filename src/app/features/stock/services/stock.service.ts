import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }
  getStock(): Observable<Stock[]> {
    let response = this.httpClient.get('https://localhost:7086/api/Stock')
    .pipe(map((stock:any) => stock));

  return response;
  }
/*
  getMovieDetail(id: number): Observable<any>{
    let response = this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-ES`);
    return response;
}*/
}
