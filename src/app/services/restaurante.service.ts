import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  static readonly URL_RESTAURANTES: string =
    'http://localhost:8081/restaurante';

  constructor(private httpClient: HttpClient) {}

  getListaRestaurantes(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_RESTAURANTES
    );
  };
};
 