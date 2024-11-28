// listar.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: '../../card/listar.component.html',
  styleUrl: '../card/listar.component.scss'
})

export class ListarComponent implements OnInit {
  cards$!: Observable<any[]>;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getCard();
  }
  atualizarLista(): void {
    this.cards$ = this.cardService.getCard();
  }
}

