import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicacoesComponent } from './pages/medicacoes/medicacoes.component';
import { ListarComponent } from './pages/listar/listar.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { CardComponent } from './card/card.component';
import {BancoDadosComponent} from './pages/banco-dados/banco-dados.component';

const routes: Routes = [
  { path: 'medicacoes', component: MedicacoesComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'incluir', component: IncluirComponent },
  { path: 'card', component: CardComponent },
  { path: 'banco-dados', component: BancoDadosComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
