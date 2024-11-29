import { Component } from '@angular/core';
import { MedicamentoService } from '../../medicamento.service';
import { Medicacao } from '../../models/medicacao';


@Component({
  selector: 'app-listar',
  templateUrl:'./listar.component.html',
  standalone: false,
  styleUrl: './listar.component.scss'
})
export class ListarComponent {
  constructor(
    private medicacoesService: MedicamentoService
  ){ }

  getMedicacoes(): Medicacao[] {
    return this.medicacoesService.recuperarMedicacoes();
  }

  


}


