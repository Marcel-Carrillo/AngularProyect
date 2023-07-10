import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css'],
})
export class PerroComponent implements OnInit {


  rutaFoto!:string;

  observerPerros:Observer<PerroWeb> = {
    next: (perroRx:PerroWeb) => {
      console.log('Perro recibido bien');
      console.log(perroRx.message);
      console.log(perroRx.status);
      this.rutaFoto = perroRx.message;
    },
    error: fallo => console.error('Fallo al recibid el peroo: ' + fallo),
    complete: () => console.log('Comunicacion completada')
  };


  constructor(private perroService: PerroService) {
    console.log('Estamos cargando el componente');
  }

  //La comunicacion con un servicio en el componente debe hacerse desde el ngoninit https://stackoverflow.com/questions/35763730/diffe
  ngOnInit(): void {
    console.log('Vamos a traernos un perro del servidor');
    //cuando me suscribo al observer, le estoy diciendo, cuando vuelvas me avisas aqui
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
    console.log("Perro solicitado... ");
    }

    getPerroAleatorio(){
      this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
    }
}
