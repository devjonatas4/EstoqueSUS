import { Injectable } from '@angular/core';
import { Medicacao } from './models/medicacao';

@Injectable({
  providedIn: 'root'
})
export class MedicacoesService {
 

  constructor() { }

  
private medicacoes: Medicacao[] = [
  {
    nome: "Dipirona",
    fabricante: "EMS",
    disponibilidade: "Medicamento não disponivel",
    
  },
  {
    nome: "Nimesulida",
    fabricante: "Cimed",
    disponibilidade: "Medicamento disponivel",
    
  },
  {
    nome: "SeaKalm",
    fabricante: "Medley",
    disponibilidade: "Medicamento não disponivel",
    
  }
];

public recuperarMedicacoes(): Medicacao[] {
  return this.medicacoes;
}

public inserirMedicacoes(medicacao: Medicacao){
  this.medicacoes.push(medicacao);

}
}
