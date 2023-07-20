import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-restaurantesnpag',
  templateUrl: './restaurantesnpag.component.html',
  styleUrls: ['./restaurantesnpag.component.css']
})
export class RestaurantesnpagComponent implements OnInit {
  @Input() restauranteSeleccionado!: Restaurante;
  listaRestaurantes!: Array<Restaurante>;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  totalRegistros: number = 0;
  totalPorPagina: number = 2;
  opcionesTamanio: number[] = [2, 4, 6, 8];
  paginaActual: number = 0;


  constructor(private restauranteService: RestauranteService,
    private modalService: MdbModalService,
    private servicioRuta: Router) {
  }


  ngOnInit(): void {
    this.getRestaurantesPorPaginas();
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

  getRestaurantesPorPagina() {
    this.restauranteService.getListaPorPagina().subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.error(errorRX);
      },
      next: (listaRestaurantesRx) => {
        this.listaRestaurantes = listaRestaurantesRx
      },
    });
  }

  openModal(restaurante: Restaurante) {
    this.restauranteSeleccionado = restaurante;
    this.modalRef = this.modalService.open(ModalComponent);
    this.modalRef.component.restaurante = restaurante;
    console.log(this.listaRestaurantes);
  }

  deleteRestaurante(id: number) {
    this.restauranteService.deleteRestaurante(id).subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.log(errorRX);
        alert('Error al eliminar');
      },
      next: () => {
        alert('Se ha eliminado correctamente');
        location.reload();
      },
    });
  }
  //Aqui tengo el restauranteSeleccionado BIENN!!!!
  modificarRestaurante(restaurante: Restaurante) {
    this.restauranteSeleccionado = restaurante;
    this.servicioRuta.navigateByUrl('/restaurante/amodificar');
    console.log(this.restauranteSeleccionado);
  }

  paginar(evento: PageEvent) {
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;

    this.getRestaurantesPorPaginas();
  }

  getRestaurantesPorPaginas() {
    this.restauranteService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (errorRX) => {
        console.log(errorRX);
        alert('Error al ver las paginas');
      },
      next: (pagina) => {
        //hago el casting
       this.listaRestaurantes = <Array<Restaurante>> pagina.content;
       this.totalRegistros = pagina.totalElements;
      }
    });
  };
};


