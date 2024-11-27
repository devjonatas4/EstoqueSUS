import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';




@Component({
  selector: 'app-incluir',
  standalone: false,
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.scss'
})

export class IncluirComponent {

  constructor(
    private medicacoesService: BancoDadosComponent
  ){ }

  form = new FormGroup({
    nome: new FormControl(),
    fabricante: new FormControl(),
    disponibilidade: new FormControl(),
    quantidade: new FormControl(),
    
  });

  onSubmit(){
    let medicacao  = {nome:this.form.value.nome,
                    fabricante: this.form.value.fabricante,
                    disponibilidade: this.form.value.disponibilidade,
                    quantidade: this.form.value.quantidade                
    }
    this.medicacoesService.inserirMedicacoes(medicacao);    
    this.form.reset();
  }
}
