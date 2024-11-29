import { Component } from '@angular/core';
import { MedicamentoService } from '../../medicamento.service';
import { Medicacao } from '../../models/medicacao';

@Component({
  selector: 'app-medicamento',
  standalone: false,
  templateUrl: './medicacoes.component.html',
  styleUrl: './medicacoes.component.scss'
})
export class MedicacoesComponent { constructor(
  private Medicacoes: MedicamentoService
){ }

getMedicacoes(): Medicacao[]{
  return this.Medicacoes.recuperarMedicacoes();
}}
