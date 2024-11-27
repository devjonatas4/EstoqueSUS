import { Component, Injectable } from '@angular/core';
import { Medicacao } from '../../models/medicacao';

@Injectable( {
  providedIn: 'root'
  
})
@Component({
  selector: 'app-banco-dados',
  standalone: false,
  templateUrl: './banco-dados.component.html',
  styleUrl: './banco-dados.component.scss'
})
export class BancoDadosComponent {

getMedicamentos(): Medicacao[] {
  return this.recuperarMedicacoes();
}


private medicacoes: Medicacao[] = [
  {
    nome: "Dipirona",
    fabricante: "EMS",
    disponibilidade: "Medicamento não disponivel",
    quantidade: 5
    
  },
  {
    nome: "Nimesulida",
    fabricante: "Cimed",
    disponibilidade: "Medicamento disponivel",
    quantidade: 3
    
  },
  {
    nome: "SeaKalm",
    fabricante: "Medley",
    disponibilidade: "Medicamento não disponivel",
    quantidade: 10
    
  }
];

public recuperarMedicacoes(): Medicacao[] {
  return this.medicacoes;
}

public inserirMedicacoes(medicacao: Medicacao){
  this.medicacoes.push(medicacao);

}
}

