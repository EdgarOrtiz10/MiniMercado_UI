import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private httpClient: HttpClient) { }
  getBuscarProductos(): Observable<Productos[]> {
    let response = this.httpClient
      .get(
        '***'
      )
      .pipe(
        map((x: any) => {
          let products: Productos[] = [];
          for (let product of x.results) {

            let resultadoProductos: Productos = {
              idProducto: product.id,
              descripcionProducto: product.overview,
              precio: product.title,
             // url: `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            };

            product.push(resultadoProductos);
          }
          return products;
        })
      );
    return response;
  }

  /*
  getMovieDetail(idProducto: number): Observable<any>{
    let response = this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a6db559033af943be136a2110dbd4b5f&language=es-ES`);
    return response;
  }
  */
}
