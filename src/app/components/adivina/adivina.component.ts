import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css'],
})
export class AdivinaComponent implements OnInit {
  titulo: String;
  numeroUsuario: number;
  numeroBuscado: number;
  contador: number;

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

  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'ADIVINA UN NÚMERO EN 5 INTENTOS';
    this.numeroUsuario = 0;
    //TODO: Calcular el numero a adivinar
    this.numeroBuscado = this.calcularNumeroAleatorioDe1a100();
    console.log("Numero a adivinar " + this.numeroBuscado);
    this.contador = 5;
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('Estoy en OnInit');
  }

  calcularNumeroAleatorioDe1a100(): number {
    let numeroGenerado: number = 0;

    numeroGenerado = Math.floor(Math.random() * (100) + 1);

    return numeroGenerado;
  }

  comprobarIntento() {
    console.log('comprobando intento');
    console.log(this.numeroUsuario);
    if(this.numeroBuscado != this.numeroUsuario){
      this.contador--
      window.alert("Te quedan " + this.contador + " intentos");
      if(this.contador < 1){
        window.alert("Has perdido");
        this.contador = 5;
        window.alert("Vuelve a jugar");
        location.reload();
      }
    }else if(this.numeroBuscado == this.numeroUsuario){
      console.log("Lo has encontrado pajaro!!!!");
      window.alert("Has ganado pajaro");
      this.contador = 5;
      window.alert("Vuelve a jugar")
      location.reload();
    }
    }

  }

