import { Component, input, } from '@angular/core';


@Component({
  selector: 'app-medicamento',
  standalone: false,
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.scss'
})
export class MedicamentoComponent { 
nome: string='Paracetamol';
Tarja: string='preta';
quantidade: number = 10; 
}
