import { Injectable } from '@angular/core';
import { Medicacao } from './models/medicacao';
@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  getMedicamentos(): Medicacao[] {
    return this.recuperarMedicacoes();
  }
  
  
  private medicacoes: Medicacao[] = [
    {
      nome: "Dipirona",
      fabricante: "EMS",
      disponibilidade: 1,
      quantidade: 5
      
    },
    {
      nome: "Nimesulida",
      fabricante: "Cimed",
      disponibilidade: 1,
      quantidade: 3
      
    },
    {
      nome: "SeaKalm",
      fabricante: "Medley",
      disponibilidade: 2,
      quantidade: 10
      
    }
  ];
  
  public recuperarMedicacoes(): Medicacao[] {
    return this.medicacoes;
  }
  
  public inserirMedicacoes(medicacao: Medicacao){
    this.medicacoes.push(medicacao);
  
  }
  public delete(medicacao: Medicacao){


    this.medicacoes = this.medicacoes.filter(item => item.nome !== medicacao.nome);
    }
    public alterar(medicacao: Medicacao){
  this.delete(medicacao);
  this.inserirMedicacoes(medicacao);
      }
}