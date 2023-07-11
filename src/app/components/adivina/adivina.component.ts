import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

/**
 * Haced una app donde el programa piense un numero del 1 al 100
 *
 * El usuario tendra 5 intentos para averiguar el numero pensado por la maquina
 *
 * Por cada intento, si falla, le debemos dar una pista y decirle si el numero introducido es menor o mayor que el buscado
 *
 * Si acierta le damos la enhorabuena
 *
 * Si supero los 5 intentos pues le decimos que ha perdido y la solucion
 */

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css'],
})
export class AdivinaComponent implements OnInit, AfterViewInit{
  titulo: String;
  numeroUsuario: number;
  numeroBuscado: number;
  contador: number;
  finDePartida: boolean;

  @ViewChild('basicTimer') contadorT!:CdTimerComponent;

  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'ADIVINA UN NÚMERO DEL 1 AL 100 EN 5 INTENTOS';
    this.numeroUsuario = 0;
    //TODO: Calcular el numero a adivinar
    this.numeroBuscado = this.calcularNumeroAleatorioDe1a100();
    console.log('Numero a adivinar ' + this.numeroBuscado);
    this.contador = 5;
    this.finDePartida = false;
  }
  ngAfterViewInit(): void {
    console.log("Este metodo invoca cuando ya se ha procesado el html asociado");
    this.contadorT.stop();  
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('Estoy en OnInit');
  }

  calcularNumeroAleatorioDe1a100(): number {
    let numeroGenerado: number = 0;

    numeroGenerado = Math.floor(Math.random() * 100 + 1);

    return numeroGenerado;
  }

  comprobarIntento() {
    console.log('comprobando intento');
    console.log(this.numeroUsuario);
    if (this.numeroBuscado < this.numeroUsuario) {
      this.contador--;
      window.alert(
        'Te quedan ' + this.contador + ' intentos y el numero es Menor Pájaro'
      );
    } else if (this.numeroBuscado > this.numeroUsuario) {
      this.contador--;
      window.alert(
        'Te quedan ' + this.contador + ' intentos y el numero es Mayor Pájaro'
      );
    } else if (this.numeroBuscado == this.numeroUsuario) {
      console.log('Lo has encontrado pájaro!!!!');
      window.alert('Has ganado enhorabuena!!');
      this.contador = 5;
      window.alert('Vuelve a jugar');
      this.finDePartida = true;
      // location.reload();
    }
    if (this.contador < 1) {
      window.alert('Has perdido el numero era ' + this.numeroBuscado);
      this.contador = 5;
      window.alert('Vuelve a jugar');
      this.finDePartida = true;
      // location.reload();
    }
    if(this.finDePartida){
      this.contadorT.stop();
      let ti:TimeInterface = this.contadorT.get();
      console.log("Has tardado " + ti.minutes + " " + ti.seconds);
    }
  }

  reset() {
    this.contador = 5;
    location.reload();
  }
}
