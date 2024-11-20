import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';

const routes: Routes = [
  {path: 'medicamento', component: MedicamentoComponent},
  {path: 'disponibilidade', component: DisponibilidadeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
