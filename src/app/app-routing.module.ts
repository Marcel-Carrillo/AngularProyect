import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';

//En este array de rotas, tengo que tener una ruta path asociado al componente
const routes: Routes = [
  {path:"dni",component: DniComponent},
  {path:"adivina",component: AdivinaComponent},
  {path:"perro",component: PerroComponent},
  {path:"cadena",component: CadenaComponent},
  {path:"imc",component: ImcComponent},
  {path:"chuck-norris",component: ChuckNorrisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
