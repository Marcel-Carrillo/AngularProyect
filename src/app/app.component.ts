import { Component } from '@angular/core';
import { Restaurante } from './models/restaurante';

@Component({
  selector: 'app-root', //la etiqueta raiz o padre. ID del componente / hook , punto de anclaje
  templateUrl: './app.component.html', //su html
  styleUrls: ['./app.component.css'] //su css
})
export class AppComponent {
  
  title = 'my-app'; 
  restauranteSeleccionado!: Restaurante;
  //aqui va el javascript - la funcionalidad del componente
  constructor(){
  
  }
}
