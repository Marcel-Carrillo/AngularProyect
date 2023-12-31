import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

//En este array de rotas, tengo que tener una ruta path asociado al componente
const routes: Routes = [
  {path:"dni",component: DniComponent},
  {path:"adivina",component: AdivinaComponent},
  {path:"perro",component: PerroComponent},
  {path:"cadena",component: CadenaComponent},
  {path:"imc",component: ImcComponent},
  {path:"chuck-norris",component: ChuckNorrisComponent},
  {path:"restaurantes",component: RestaurantesComponent},
  {path:"restaurante/nuevo",component: FormularioRestauranteComponent},
  {path:"restaurante/amodificar",component: FormularioRestauranteComponent},
  {path:"restaurantesnpag",component: RestaurantesnpagComponent},
  {path:"busqueda",component: BusquedaComponent},
  {path: "**", redirectTo: "/"}
];

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Tus rutas aquí
  // ...
  { path: '**', redirectTo: '/' } // Redirige todas las rutas no mapeadas a la página principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
