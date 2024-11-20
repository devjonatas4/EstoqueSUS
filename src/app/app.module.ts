import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentoComponent,
    DisponibilidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
