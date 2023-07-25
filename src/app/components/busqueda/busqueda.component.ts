import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ModalComponent } from '../modal/modal.component';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @Input() restaurante!: Restaurante;
  @Input() listaRestaurantes!: Array<Restaurante>;
  @Input() restauranteSeleccionado!: Restaurante;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  ruta_servicio_foto: string = RestauranteService.URL_RESTAURANTES_PRODUCCION+"/obtenerfoto";

  //ElementRef es el tipo generico de Angular para referirnos 
  //a una etiqueta estandar de HTML
  //Envoltorio de Angular a los elementos/etiquetas
  //nativas "wrapper"
  @ViewChild("cajabusqueda") cajaInput!: ElementRef;
  @ViewChild("mapas") mapaHijo!: MapaComponent;

  constructor(private restauranteService: RestauranteService,
    private modalService: MdbModalService,
  ) {

  }

  ngOnInit(): void {


  }

  busqueda1() {
    if (this.cajaInput.nativeElement.value != "") {
      let terminoBusqueda: string = this.cajaInput.nativeElement.value;
      console.log(terminoBusqueda);
      //TODO: consumir el servicio web de búsqueda
      //para traer los restaurantes que coincidan
      //con el término de búsqueda
      this.restauranteService.getRestaurantesPorNombreBarrioEspecialidad(terminoBusqueda).subscribe({
        complete: () => console.log('Comunicacion completada'),
        error: (errorRX) => {
          console.error(errorRX);
        },
        next: (listaRestaurantesRx) => {
          listaRestaurantesRx.forEach((r) =>
            console.log(`ID = ${r.id} NOMBRE= ${r.nombre}`)
          );
          this.listaRestaurantes = listaRestaurantesRx;
        },
      });
      console.log(this.listaRestaurantes);
    } else {
      this.listaRestaurantes = [];
    }
  }

  openModal(restaurante: Restaurante) {
    this.restauranteSeleccionado = restaurante;
    this.modalRef = this.modalService.open(ModalComponent);
    this.modalRef.component.restaurante = restaurante;
    console.log(this.listaRestaurantes);
  }

  busqueda2() {
    console.log("busqueda2");
  }

  busqueda3() {
    console.log("busqueda3");
  }

  restauranteTocado(restaurante: Restaurante) {
    this.mapaHijo.dibujarPosicion(restaurante.latitud,restaurante.longitud);
  }

  encuentrame(){
    if(navigator.geolocation){
      console.log("tenemos acceso al api geo");
      navigator.geolocation.getCurrentPosition((pos)=>this.exito(pos),
      ()=>this.fracaso());
    }else{
      console.log("no tenemos acceso al api geo");
      
    }
  }

  exito(posicion: GeolocationPosition){
    console.log("Se ha encontrado su posicion");
    console.log(`Latitud ${posicion.coords.latitude}` );
    console.log(`Longitud ${posicion.coords.longitude}` );
    this.mapaHijo.dibujarPosicion (posicion.coords.latitude,posicion.coords.longitude );
    
  }

  fracaso(){
    alert("No es posible determinar su ubicacion en este dispositivo");
  }
}
