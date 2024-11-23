import { Component, Input } from '@angular/core';
import { Medicacao } from '../models/medicacao';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() medicacao: Medicacao|null = null;



  onClick() {​
    alert('item ``' + this.medicacao?.nome + '`` Excluído!');​
  }
}