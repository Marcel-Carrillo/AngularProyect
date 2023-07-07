import { Component, OnInit } from '@angular/core';
import { Dni } from 'src/app/models/dni';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  numDni: number;
  letraDni: String;
  listaDnis: Array<Dni>; //esta lista almacena los dnis introducidos
  listaDnisExtranjero: Array<Dni>;

  constructor() {
    this.numDni = 0;
    this.letraDni = '';
    this.listaDnis = new Array<Dni>();
    this.listaDnisExtranjero = new Array<Dni>();
  }

  //readonly porque es una constante
  //static es un atributo de la clase
  //para cada etiqueta/instancia, no cambia
  static readonly SECUENCIA_LETRAS_DNI: String = 'TRWAGMYFPDXBNJZSQVHLCKE';

  ngOnInit(): void {
    let numdnimarcel: number = 25733447;
    let resto: number = numdnimarcel % 23;
    console.log('resto marcel = ' + resto);
    let letra: String = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log('letra de Marcel es ' + letra);

    //hago el casting de Element(etiqueta generica) HtmlInputElement
    let inputSeleccionado: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    );
    console.log(inputSeleccionado.value);
  }

  calculoLetraDni() {
    let dni: Dni = new Dni();
    let restoE = 0;
    let dniConPre = '';
    let valor = 0;
    let letraExtrangera: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    );
    if (letraExtrangera.value == '0') {
      valor = 0;
      dniConPre = valor + this.numDni.toString();
      restoE = parseInt(dniConPre) % 23;
      this.letraDni = DniComponent.SECUENCIA_LETRAS_DNI.charAt(restoE);
    } else if (letraExtrangera.value == '1') {
      valor = 1;
      dniConPre = valor + this.numDni.toString();
      restoE = parseInt(dniConPre) % 23;
      this.letraDni = DniComponent.SECUENCIA_LETRAS_DNI.charAt(restoE);
    } else if (letraExtrangera.value == '2') {
      valor = 2;
      dniConPre = valor + this.numDni.toString();
      restoE = parseInt(dniConPre) % 23;
      this.letraDni = DniComponent.SECUENCIA_LETRAS_DNI.charAt(restoE);
    } else {
      let resto = this.numDni % 23;
      this.letraDni = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    }

    
    if(letraExtrangera.id != "sin"){
    dni.numero = this.numDni;
    dni.letra = this.letraDni.toString();
    dni.numero = this.numDni;
    dni.prefijo = letraExtrangera.id;
    this.listaDnis.push(dni);
    }else{
    dni.numero = this.numDni;
    dni.letra = this.letraDni.toString();
    this.listaDnis.push(dni);
    }
    this.mostrarListaDnis();
  }

  mostrarListaDnis(): void {
    console.log('Mostrando lista DNIS');
    this.listaDnis.forEach((d) => {
      if (d.prefijo != 'sin') {
        console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra} `);
      } else {
        console.log(`Dni = ${d.numero}-${d.letra} `);
      }
    });

    console.log('Mostrando lista DNIs extranjeros');
    this.listaDnisExtranjero = this.listaDnis.filter((d) => d.prefijo != 'sin');
    console.log(this.listaDnisExtranjero);
  }

  obtenerSoloExtrangeros(): Array<Dni> {
    let listaEx = new Array<Dni>();
    listaEx = this.listaDnis.filter((d) => d.prefijo != 'sin');
    return listaEx;
  }

  //TODO: add boton para ordenar por letra
  //TODO: haced un componente con el ejercicio de IMC peso y altura
  

  ordenarPorNumero(): void {
    //ordenar los Dnis por número
    this.listaDnis.sort((a, b) => a.numero - b.numero);
  }
}
