import { Component, Input} from '@angular/core';
import { Medicacao } from '../models/medicacao';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
 @Input() medicacao:Medicacao | null = null;
constructor(
  private medicacoesService: MedicamentoService
){ }

showAlterar: boolean = false;

onExcluir() {
  
    alert("item Excluído!");
  this.medicacoesService.delete(this.medicacao??{nome:'',fabricante:'',disponibilidade:0,quantidade:0});
}

onAlterar() {
  this.showAlterar = true;
}
mostrarIncluir(){
  return this.showAlterar;
}


}