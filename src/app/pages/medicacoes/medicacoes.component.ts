import { Component } from '@angular/core';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';
import { Medicacao } from '../../models/medicacao';

@Component({
  selector: 'app-medicamento',
  standalone: false,
  templateUrl: './medicacoes.component.html',
  styleUrl: './medicacoes.component.scss'
})
export class MedicacoesComponent { constructor(
  private Medicacoes: BancoDadosComponent
){ }

getMedicacoes(): Medicacao[]{
  return this.Medicacoes.recuperarMedicacoes();
}}
