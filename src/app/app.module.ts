import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicacoesComponent } from './pages/medicacoes/medicacoes.component';
import { ListarComponent } from './pages/listar/listar.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BancoDadosComponent } from './pages/banco-dados/banco-dados.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicacoesComponent,
    ListarComponent,
    IncluirComponent,
    CapitalizePipe,
    CardComponent,
    BancoDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
