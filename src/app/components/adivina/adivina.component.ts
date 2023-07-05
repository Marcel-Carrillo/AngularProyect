import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit{

  /**
   * Haced una app donde el programa piense un numero del 1 al 100
   * 
   * El usuario tendra 5 intentos para averiguar el numero pensado por la maquina
   * 
   * Por cada intento, si falla, le debemos dar una pista y decirle si el numero introducido es menor o mayor que el buscado
   * 
   * Si hacierta le damos la enhorabuena
   * 
   * Si supero los 5 intentos pues le decimos que ha perdido y la solucion
   */

   


  constructor(){
    console.log("Estoy en el constructor");
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Estoy en OnInit");
    
  }
}
