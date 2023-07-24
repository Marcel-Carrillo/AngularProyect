import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css'],
})
export class FormularioRestauranteComponent implements OnInit, AfterViewInit {
  foto_seleccionada!: File | null; //union type
  restaurante: Restaurante;
  barrios: Array<String>;
  restauranteSel! : Restaurante;
  formulario! : Boolean;


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
  }ngAfterViewInit(): void {
    
  }
;
  ngOnInit(): void {
    let restauranteString : any = localStorage.getItem('restauranteSel');
    this.restauranteSel = JSON.parse(restauranteString);
    let formularioString : any = sessionStorage.getItem('formulario');
    this.formulario = JSON.parse(formularioString);
  };

  
  //Aqui que es donde lo quiero no lo consigo traer....MAL!!!!
  modificarRestaurante(restaurante: Restaurante) {
    if (this.restauranteSel) {
      // Aquí asumimos que ya tienes el restaurante seleccionado para modificar en la variable restauranteSel
  
      // Asigna los valores modificados de restauranteSel al objeto restaurante
      this.restaurante.nombre = this.restauranteSel.nombre;
      this.restaurante.direccion = this.restauranteSel.direccion;
      this.restaurante.barrio = this.restauranteSel.barrio;
      this.restaurante.web = this.restauranteSel.web;
      this.restaurante.fichaGoogle = this.restauranteSel.fichaGoogle;
      this.restaurante.latitud = this.restauranteSel.latitud;
      this.restaurante.longitud = this.restauranteSel.longitud;
      this.restaurante.precioMedio = this.restauranteSel.precioMedio;
      this.restaurante.especialiadad1 = this.restauranteSel.especialiadad1;
      this.restaurante.especialiadad2 = this.restauranteSel.especialiadad2;
      this.restaurante.especialiadad3 = this.restauranteSel.especialiadad3;
  
      // Luego, puedes llamar a tu servicio para enviar la solicitud PUT con los datos actualizados del restaurante
      this.restauranteService.putRestaurante(this.restaurante, this.restauranteSel.id).subscribe({
        complete: () => console.log('Comunicación completada'),
        error: (error) => {
          console.error(error);
          alert('Error al modificar el restaurante');
        },
        next: () => {
          alert('Restaurante modificado correctamente');
          this.servicioRuta.navigateByUrl('/restaurantes');
        },
      });
    } else {
      // Manejo de error si no se ha seleccionado ningún restaurante para modificar
      console.error('Error: No se ha seleccionado un restaurante para modificar');
      alert('Error: No se ha seleccionado un restaurante para modificar');
    }
  }

  crearRestaurante() {
    if(this.foto_seleccionada != null){
      //el usuario llama a post con foto
      this.restauranteService.postRestauranteConFoto(this.restaurante, this.foto_seleccionada).subscribe({
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
    }else{
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
    };
  };

  seleccionarFoto(evento: Event) {
    console.log("foto cambiada");
    //evento.target //éste es el input file
    let input_file = evento.target as HTMLInputElement;
    if (input_file.files) {
      this.foto_seleccionada = input_file.files[0];
      console.log("Nombre fichero sel = " + this.foto_seleccionada.name);
      console.log("Tipo fichero sel = " + this.foto_seleccionada.type);
      //si es una imagen, perfecto "me la quedo"
      if (this.foto_seleccionada.type.indexOf('image') >= 0) {
        console.log("el usuario ha seleccionado una imagen");
      } else {
        console.log("el usuario NO ha seleccionado una imagen");
        this.foto_seleccionada = null;
        //si no, la elimino, "no me la quedo"
      };
    };
  };
};
