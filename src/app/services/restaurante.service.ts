import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {

  static readonly URL_RESTAURANTES_PRODUCCION: string =
    'restaurante';
    //restaurantes.component.ts
    //busqueda.component.ts
    //restaurantesnpag.component.ts

    
    static readonly URL_RESTAURANTES: string =
    'http://localhost:8081/restaurante';
    
    static readonly URL_REST_PAGINAS_PRODUCCION: string =
    'restaurante/paginas?page=0&size=2'
    
    static readonly URL_REST_PAGINAS: string =
    'http://localhost:8081/restaurante/paginas?page=0&size=2'
    
    static readonly URL_REST_BUSQUEDA_PRODUCCION: string =
    'restaurante/buscarPorClave';
    
    static readonly URL_REST_BUSQUEDA: string =
    'http://localhost:8081/restaurante/buscarPorClave';
    
    static readonly URL_RESTAURANTES_ACTUAL: string = RestauranteService.URL_RESTAURANTES_PRODUCCION;
    static readonly URL_RESTAURANTES_PAGINAS_ACTUAL: string = RestauranteService.URL_REST_PAGINAS_PRODUCCION;
    static readonly URL_RESTAURANTES_BUSQUEDA_ACTUAL: string = RestauranteService.URL_REST_BUSQUEDA_PRODUCCION;
    


  cabeceras: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  @Input() terminoBusqueda!: HTMLElement;

  constructor(private httpClient: HttpClient) { }

  getListaRestaurantes(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_RESTAURANTES_ACTUAL
    );
  }

  getListaPorPagina(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_RESTAURANTES_PAGINAS_ACTUAL
    );
  }

  postRestaurante(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.post<Restaurante>(
      RestauranteService.URL_RESTAURANTES_ACTUAL,
      restaurante,
      {
        headers: this.cabeceras,
      }
    );
  }

  deleteRestaurante(id: number) {
    return this.httpClient.delete<Restaurante>(
      RestauranteService.URL_RESTAURANTES_ACTUAL + "/" + id)
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

    return this.httpClient.post<Restaurante>(RestauranteService.URL_RESTAURANTES_ACTUAL + "/crear-con-foto", formData);
  }


  //GET a http://localhost:8081/restaurante/paginas?page=0&size=2
  getPaginaRestaurantes(page: number, size: number): Observable<any> {
    let parametros: HttpParams = new HttpParams().set('page', page).set('size', size)
    return this.httpClient.get<any>(RestauranteService.URL_RESTAURANTES_ACTUAL + "/paginas", { params: parametros })
  }


  getRestaurantesPorNombreBarrioEspecialidad(clave: string): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(
      RestauranteService.URL_RESTAURANTES_BUSQUEDA_ACTUAL + "/" + clave
    );
  }


  putRestaurante(restaurante: Restaurante, id: number): Observable<Restaurante> {
    return this.httpClient.put<Restaurante>(
      `${RestauranteService.URL_RESTAURANTES_ACTUAL}/${id}`, restaurante,
      {
        headers: this.cabeceras,
      }
    );
  }
}


