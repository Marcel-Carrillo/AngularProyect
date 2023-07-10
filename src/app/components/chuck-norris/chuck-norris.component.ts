import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ChuckNorris } from 'src/app/models/chuck-norris';
import { ChuckNorrisService } from 'src/app/services/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit{
  fraseChuck!:string;
  

  observerChuck: Observer<ChuckNorris> = {
    next: (chuckRx: ChuckNorris) => {
      console.log('Frase recibida');
      console.log(chuckRx.value);
      this.fraseChuck = chuckRx.value;
    },
    error: (fallo) => console.error('Fallo al recibid la frase: ' + fallo),
    complete: () => console.log('Comunicacion completada'),
  }

  constructor(private chuckService: ChuckNorrisService) {
    console.log("Estamos cargando el componente");
    
  }

  ngOnInit(): void {
   console.log("Vamos a traernos una frase del servidor");

   this.chuckService.getFraseChuck().subscribe(this.observerChuck);
  }

  getFraseChuck(){
    this.chuckService.getFraseChuck().subscribe(this.observerChuck);
  }


}
