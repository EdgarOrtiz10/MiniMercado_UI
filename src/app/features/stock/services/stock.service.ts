import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../models/productos';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  getVerStock(): Observable<Productos[]> {
    let response = this.httpClient
      .get(
        '***'
      )
      .pipe(
        map((x: any) => {
          let products: Productos[] = [];
          for (let product of x.results) {

            let stockProducts: Productos = {
              idProducto: product.id,
              descripcionProducto: product.overview,
              precio: product.title,
             // url: `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            };

            product.push(stockProducts);
          }
          return products;
        })
      );
    return response;
  }
/*
  getMovieDetail(id: number): Observable<any>{
    let response = this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-ES`);
    return response;
}*/
}
