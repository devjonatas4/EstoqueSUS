import { Component } from '@angular/core';
import { Medicacao } from './models/medicacao';
import { BancoDadosComponent } from './pages/banco-dados/banco-dados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Estoque';
  
  constructor(
  private MedicacoesService: BancoDadosComponent
) { }

getMedicacoes(): Medicacao[] {
  return this.MedicacoesService.recuperarMedicacoes();
}
}



