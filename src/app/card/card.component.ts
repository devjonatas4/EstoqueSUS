import { Component, Input} from '@angular/core';
import { Medicacao } from '../models/medicacao';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
 @Input() medicacoes:Medicacao|null =null;

  isMedicacaoT(){
    return this.medicacoes?.quantidade !== 1;
  }

  onClick() {
    if (this.medicacoes) {
      alert(`item "${this.medicacoes.nome}" Excluído!`);
    } else {
      alert('Nenhum item para excluir.');
    };
}
}
