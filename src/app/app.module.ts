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


@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
    CadenaComponent,
    ImcComponent,
    ChuckNorrisComponent,
    RestaurantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
