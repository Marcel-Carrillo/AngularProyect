import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  listaRestaurantes!: Array<Restaurante>;

  constructor(private restauranteService: RestauranteService) {}

  ngOnInit(): void {
    this.restauranteService.getListaRestaurantes().subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.error(errorRX);
      },
      next: (listaRestaurantesRx) => {
        console.log('Lista de restaurantes recibida');
        listaRestaurantesRx.forEach((r) =>
          console.log(`ID = ${r.id} NOMBRE= ${r.nombre}`)
        );
        this.listaRestaurantes = listaRestaurantesRx;
      },
    });
  }

  getRestaurantesTotales() {
    this.restauranteService.getListaRestaurantes().subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.error(errorRX);
      },
      next: (listaRestaurantesRx) => {
        console.log('Lista de restaurantes recibida');
        listaRestaurantesRx.forEach((r) =>
          console.log(`ID = ${r.id} NOMBRE= ${r.nombre}`)
        );
        this.listaRestaurantes = listaRestaurantesRx;
      },
    });
  }
}
