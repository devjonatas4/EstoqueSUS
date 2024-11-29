import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicamentoService } from '../../medicamento.service';
import { Medicacao } from '../../models/medicacao';




@Component({
  selector: 'app-incluir',
  standalone: false,
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.scss'
})

export class IncluirComponent {

  constructor(
    private medicacoesService: MedicamentoService
  ){ }
@Input() isAlterar: boolean = false;
@Input() medicacaoAlterar: Medicacao | null = null;

  form = new FormGroup({
  
    nome: new FormControl(),
    fabricante: new FormControl(),
    disponibilidade: new FormControl(),
    quantidade: new FormControl(),
    
  });

  ngOnInit() {
  if (this.isAlterar) {
    this.form.patchValue({
      nome: this.medicacaoAlterar?.nome,
      fabricante: this.medicacaoAlterar?.fabricante,
      disponibilidade: this.medicacaoAlterar?.disponibilidade,
      quantidade: this.medicacaoAlterar?.quantidade
    });
  }  
  }

  onSubmit(){
    let medicacao  = { 
      nome:this.form.value.nome,
                    fabricante: this.form.value.fabricante,
                    disponibilidade: this.form.value.disponibilidade,
                    quantidade: this.form.value.quantidade                
    }
    if (this.isAlterar) {this.medicacoesService.alterar(medicacao); }
     else {this.medicacoesService.inserirMedicacoes(medicacao);    
    this.form.reset();}
  }
}
