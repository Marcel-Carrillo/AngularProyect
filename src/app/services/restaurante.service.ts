import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  static readonly URL_RESTAURANTES: string =
    'http://localhost:8081/restaurante';

  static readonly URL_REST_PAGINAS: string = 
  'http://localhost:8081/restaurante/paginas?page=0&size=2'

  cabeceras: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getListaRestaurantes(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_RESTAURANTES
    );
  }

  getListaPorPagina(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_REST_PAGINAS
    );
  }

  postRestaurante(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.post<Restaurante>(
      RestauranteService.URL_RESTAURANTES,
      restaurante,
      {
        headers: this.cabeceras,
      }
    );
  }

  deleteRestaurante(id:number) {
    return this.httpClient.delete<Restaurante>(
      RestauranteService.URL_RESTAURANTES + "/" + id)
  }
}
