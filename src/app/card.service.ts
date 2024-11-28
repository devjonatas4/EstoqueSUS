// card.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'https://example.com/cards';

  constructor(private http: HttpClient) { }

  getCard(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  alterarCard(card: any): Observable<any> {
    return this.http.put(this.apiUrl, card);
  }

  excluirCard(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

}