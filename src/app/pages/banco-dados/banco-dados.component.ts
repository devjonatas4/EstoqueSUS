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
  return this.recuperarMedicamento();
}

private medicacoes: Medicacao[] = [
  {
    nome: "Paracetamol", fabricante: "Vermelha", quantidade: 10,
    disponibilidade: ''
  },
  {
    nome: "Dipirona", fabricante: "preta", quantidade: 3,
    disponibilidade: ''
  },
  {
    nome: "biovicerim", fabricante: "Vermelha", quantidade: 7,
    disponibilidade: ''
  },
  {
    nome: "Histamin", fabricante: "vermelha", quantidade: 103,
    disponibilidade: ''
  },
];

public recuperarMedicamento(): Medicacao[]{
  return this.medicacoes;
}

public inserirMedicamento(medicacoes: Medicacao){
  this.medicacoes.push(medicacoes);
}
}
