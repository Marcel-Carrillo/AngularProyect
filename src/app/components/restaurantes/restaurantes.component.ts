import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  listaRestaurantes: Array<Restaurante>;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  restauranteSeleccionado!: Restaurante;

  constructor(
    private restauranteService: RestauranteService,
    private modalService: MdbModalService
  ) {
    this.listaRestaurantes = [];
  }

  @ViewChild(ModalComponent) modal!: ModalComponent;

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

    openModal(restaurante: Restaurante) {
    this.restauranteSeleccionado = restaurante;
    this.modalRef = this.modalService.open(ModalComponent);
    this.modalRef.component.restaurante = restaurante;
    console.log(this.listaRestaurantes);
  }

  deleteRestaurante(id:number) {
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
}
