import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { CdTimerModule } from 'angular-cd-timer';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ModalComponent } from './components/modal/modal.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MapaComponent } from './components/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
    CadenaComponent,
    ImcComponent,
    ChuckNorrisComponent,
    RestaurantesComponent,
    ModalComponent,
    FormularioRestauranteComponent,
    RestaurantesnpagComponent,
    BusquedaComponent,
    MapaComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CdTimerModule,
    MdbCheckboxModule,
    MdbModalModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
