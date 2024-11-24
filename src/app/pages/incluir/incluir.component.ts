import { Component } from '@angular/core';
import { MedicacoesService } from '../../medicacoes.service';
import { Medicacao } from '../../models/medicacao';
import { FormControl, FormGroup } from '@angular/forms';
import { QueueAction } from 'rxjs/internal/scheduler/QueueAction';




@Component({
  selector: 'app-incluir',
  standalone: false,
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.scss'
})

export class IncluirComponent {

  constructor(
    private medicacoesService: MedicacoesService
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
