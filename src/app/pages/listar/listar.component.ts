import { Component } from '@angular/core';
import { MedicacoesService } from '../../medicacoes.service';
import { Medicacao } from '../../models/medicacao';

@Component({
  selector: 'app-listar',
  standalone: false,
  
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {
  constructor(
    private medicacoesService: MedicacoesService
  ){ }

  getMedicacoes(): Medicacao[] {
    return this.medicacoesService.recuperarMedicacoes();
  }

}
