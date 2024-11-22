import { Component } from '@angular/core';
import { Medicacao } from './models/medicacao';
import { MedicacoesService } from './medicacoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Estoque';
  
  constructor(
  private MedicacoesService: MedicacoesService
) { }

getMedicacoes(): Medicacao[] {
  return this.MedicacoesService.recuperarMedicacoes();
}
}



