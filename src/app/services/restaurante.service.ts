import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) { }

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

  deleteRestaurante(id: number) {
    return this.httpClient.delete<Restaurante>(
      RestauranteService.URL_RESTAURANTES + "/" + id)
  }

  postRestauranteConFoto(restaurante: Restaurante, archivo: File): Observable<Restaurante> {
    //declaramos una variable local que represente el FormData
    let formData = new FormData();

    formData.append('nombre', restaurante.nombre);
    formData.append('direccion', restaurante.direccion);
    formData.append('barrio', restaurante.barrio);
    formData.append('web', restaurante.web);
    formData.append('fichaGoogle', restaurante.fichaGoogle);
    formData.append('latitud', restaurante.latitud + '');
    formData.append('longitud', restaurante.longitud + '');
    formData.append('precioMedio', restaurante.precioMedio + '');
    formData.append('especialiadad1', restaurante.especialiadad1);
    formData.append('especialiadad2', restaurante.especialiadad2);
    formData.append('especialiadad3', restaurante.especialiadad3);
    formData.append('archivo', archivo);

    return this.httpClient.post<Restaurante>(RestauranteService.URL_RESTAURANTES + "/crear-con-foto", formData);
  }


  //GET a http://localhost:8081/restaurante/paginas?page=0&size=2
  getPaginaRestaurantes(page:number, size:number):Observable<any>{
    let parametros:HttpParams = new HttpParams().set('page', page).set('size', size)
    return this.httpClient.get<any>(RestauranteService.URL_RESTAURANTES+"/paginas", {params:parametros})
  }

}
