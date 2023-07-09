import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit{
    peso: number;
    estatura: number;
    imc: string;

    constructor(){
      this.peso = 0;
      this.estatura = 0;
      this.imc = "";
    }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  calculoImc(){
    this.imc = (this.peso / Math.pow(this.estatura, 2)).toString();
  }
}
