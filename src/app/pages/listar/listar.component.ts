import { Component } from '@angular/core';
import { MedicacoesService } from '../../medicacoes.service';
import { Medicacao } from '../../models/medicacao';
import { FormControl, FormGroup } from '@angular/forms';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';


@Component({
  selector: 'app-listar',
  templateUrl: '../../listar.component.html',
  standalone: false,
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

}


