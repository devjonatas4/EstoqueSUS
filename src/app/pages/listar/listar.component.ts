import { Component } from '@angular/core';
import { MedicacoesService } from '../../medicacoes.service';
import { Medicacao } from '../../models/medicacao';
import { FormControl, FormGroup } from '@angular/forms';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';


@Component({
  selector: 'app-listar',
  standalone: false,
  
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {

  form = new FormGroup({
    nome: new FormControl(),
    fabricante: new FormControl(),
    disponibilidade: new FormControl(),
    quantidade: new FormControl(),
    
  });
  onreset(): void {
  this.form.reset();
}


  constructor(
    private medicacoesService: MedicacoesService
  ){ }

  getMedicacoes(): Medicacao[] {
    return this.medicacoesService.recuperarMedicacoes();
  }

  onsubmit() {
    let medicacao  = {nome:this.form.value.nome,
                      fabricante: this.form.value.fabricante,
                      disponibilidade: this.form.value.disponibilidade,
                      quantidade: this.form.value.quantidade 
    }
    this.medicacoesService.inserirMedicacoes(medicacao);    
    this.form.reset();
  }


}


