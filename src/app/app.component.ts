import { Component } from '@angular/core';
import { Medicacao } from './models/medicacao';
import { MedicamentoService } from './medicamento.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Estoque';
  
  constructor(
  private medicamentosService: MedicamentoService
) { }

getMedicacoes(): Medicacao[] {
  return this.medicamentosService.recuperarMedicacoes();
}
}



