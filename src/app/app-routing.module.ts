import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicacoesComponent } from './medicacoes/medicacoes.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';
import { ListarComponent } from './pages/listar/listar.component';
import { IncluirComponent } from './pages/incluir/incluir.component';

const routes: Routes = [
  { path: 'medicamento', component: MedicacoesComponent },
  { path: 'disponibilidade', component: DisponibilidadeComponent },
  { path: 'listar', component: ListarComponent },
  {path: 'incluir', component: IncluirComponent},
  { path: '', redirectTo: '/listar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
