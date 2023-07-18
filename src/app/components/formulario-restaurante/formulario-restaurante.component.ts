import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css'],
})
export class FormularioRestauranteComponent implements OnInit {
  @Input() restauranteSeleccionado!: Restaurante;
  restaurante: Restaurante;
  barrios: Array<String>;
  

  //Servicio rutas
  constructor(
    private restauranteService: RestauranteService,
    private servicioRuta: Router
    ) {
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
    ngOnInit(): void {
      console.log(this.restauranteSeleccionado,"1111111111111111111111111111");
    }
    //Aqui que es donde lo quiero no lo consigo traer....MAL!!!!
    modificarRestaurante(restaurante: Restaurante) {
    }
    
    crearRestaurante() {
      this.restauranteService.postRestaurante(this.restaurante).subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.error(errorRX);
        alert('Error al insertar');
      },
      next: () => {
        alert('Restaurante insertado correctamente');
        this.servicioRuta.navigateByUrl('/restaurantes');
      },
    });
  }
}
