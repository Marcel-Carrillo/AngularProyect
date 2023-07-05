import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';

//En este array de rotas, tengo que tener una ruta path asociado al componente
const routes: Routes = [
  {path:"dni",component: DniComponent},
  {path:"adivina",component: AdivinaComponent},
  {path:"perro",component: PerroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
