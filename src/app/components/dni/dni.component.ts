import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  numDni: number;
  letraDni: String;

  constructor() {
    this.numDni = 0;
    this.letraDni = '';
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
  }
}
