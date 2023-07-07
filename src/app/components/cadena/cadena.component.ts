import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadena',
  templateUrl: './cadena.component.html',
  styleUrls: ['./cadena.component.css'],
})
export class CadenaComponent implements OnInit {
  introducePalabra: String;
  cadena: String;
  cantidadPalabras: number;
  esParOImpar: String;
  cadenaAlreves: String;

  constructor() {
    this.introducePalabra = '';
    this.cadena = '';
    this.cantidadPalabras = 0;
    this.esParOImpar = 'cuando introduzcas palabras será par o impar';
    this.cadenaAlreves = '';
  }
  ngOnInit(): void {}

  introduceACadena() {
    if (this.introducePalabra != '') {
      this.cadena = this.cadena.concat(this.introducePalabra.toString()+"-");
      this.introducePalabra = '';
      let palabras = this.cadena.split(',');
      this.cantidadPalabras = palabras.length - 1;
      if (this.cadena == '') {
        this.cantidadPalabras = 0;
      }
    }
    if (this.cantidadPalabras % 2 == 0) {
      this.esParOImpar = 'es par';
    } else {
      this.esParOImpar = 'es impar';
    }
  }

  darLaVuelta(): void {
    this.cadenaAlreves = this.cadena.split('').reverse().join('');
  }

  resetea() {
    location.reload();
  }
}
