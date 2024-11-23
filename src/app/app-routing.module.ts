import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicacoesComponent } from './pages/medicacoes/medicacoes.component';
import { DisponibilidadeComponent } from './pages/disponibilidade/disponibilidade.component';
import { ListarComponent } from './pages/listar/listar.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'medicacoes', component: MedicacoesComponent },
  { path: 'disponibilidade', component: DisponibilidadeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'incluir', component: IncluirComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
