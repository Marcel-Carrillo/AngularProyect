import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckNorris } from '../models/chuck-norris';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  static readonly URL_API_CHUCK = "https://api.chucknorris.io/jokes/random";

  constructor(private httpClient: HttpClient) { }


  getFraseChuck(): Observable<ChuckNorris>{
    return this.httpClient.get<ChuckNorris>(ChuckNorrisService.URL_API_CHUCK);
    }

}
