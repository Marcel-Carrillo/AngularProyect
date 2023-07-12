import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css'],
})
export class FormularioRestauranteComponent implements OnInit {
  restaurante: Restaurante;
  barrios: Array<String>;

  constructor(private restauranteService: RestauranteService) {
    this.restaurante = new Restaurante();
    this.barrios = [
      '---',
      'Centro',
      'Este',
      'Ciudad Jardín',
      'Bailén-Miraflores',
      'Palma-Palmilla',
      'Cruz de Humilladero',
      'Carretera de Cádiz',
      'Churriana',
      'Campanillas',
      'Puerto de la Torre',
      'Teatinos-Universidad',
    ];
  }

  ngOnInit(): void {}
  crearRestaurante() {
    this.restauranteService.postRestaurante(this.restaurante).subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.error(errorRX);
        alert('Error al insertar');
      },
      next: (restNuevo) => {
        alert('Restaurante insertado correctamente');
        console.log('El restaurante nuevo tiene el id ' + restNuevo.id);
      },
    });
  }

  
}
