import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerroService {
  //desde aqui vamos a interactuar con el servidor
  static readonly URL_API_PERROS = 'https://dog.ceo/api/breeds/image/random';

  //@Autowired
  //httpClient:HttpClient

  //en angular la inyeccion de dependencias se hace directamente recibiendola en el constructor
  constructor(private httpClient: HttpClient) {}

  //El metodo me devuelve un perroweb en un futuro, dentro de un rato,asyncrono
  getPerroAleatorio(): Observable<PerroWeb> {
    //Entre <comillas> indico el tipo de dato recibido en el cuerpo del mensaje en JSON
    return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  };
};
