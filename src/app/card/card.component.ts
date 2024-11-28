// import { Component, Input} from '@angular/core';
// import { Medicacao } from '../models/medicacao';

// @Component({
//   selector: 'app-card',
//   standalone: false,
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.scss'
// })

// export class CardComponent {
//  @Input() medicacoes:Medicacao|null =null;

//   isMedicacaoT(){
//     return this.medicacoes?.quantidade !== 1;
//   }

//   onClick() {
//     if (this.medicacoes) {
//       alert(`item "${this.medicacoes.nome}" Excluído!`);
//     } else {
//       alert('Nenhum item para excluir.');
//     };
// }
// }

// editar-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { ListarComponent } from '../pages/listar/listar.component';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: '../../card/card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  form!: FormGroup;
  card: any;

  constructor(private cardService: CardService, private listarComponent: ListarComponent) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      card: new FormGroup({
        nome: new FormControl('', Validators.required),
        fabricante: new FormControl('', Validators.required),
        disponibilidade: new FormControl(Validators.required),
        quantidade: new FormControl(Validators.required),
      })
    });

    this.cardService.getCard().subscribe((card: any) => {
      this.card = card;
      this.form.patchValue(card);
    });
  }

  alterarCard(): void {
    if (this.form.valid) {
      this.cardService.alterarCard(this.form.value).subscribe((response: any) => {
        console.log('Card alterado com sucesso:', response);
        this.listarComponent.atualizarLista();
      });
    }
  }

  excluirCard(): void {
    this.cardService.excluirCard().subscribe((response: any) => {
      console.log('Card excluído com sucesso:', response);
      this.listarComponent.atualizarLista();
    });
  }
}
