import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //la etiqueta raiz o padre. ID del componente / hook , punto de anclaje
  templateUrl: './app.component.html', //su html
  styleUrls: ['./app.component.css'] //su css
})
export class AppComponent {
  title = 'my-app'; 
  //aqui va el javascript - la funcionalidad del componente
  constructor(){
    console.log("hola estoy en el constructor del appcomponent");
    
  }
}
