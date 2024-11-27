import { Component } from '@angular/core';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';
import { Medicacao } from '../../models/medicacao';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  standalone: false,
  styleUrl: './listar.component.scss'
})
export class ListarComponent {
  constructor(
    private medicacoesService: BancoDadosComponent
  ){ }

  getMedicacoes(): Medicacao[] {
    return this.medicacoesService.recuperarMedicacoes();
  }

}


