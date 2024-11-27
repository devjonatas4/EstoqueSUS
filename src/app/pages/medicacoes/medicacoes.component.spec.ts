import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacoesComponent } from './medicacoes.component';

describe('MedicamentoComponent', () => {
  let component: MedicacoesComponent;
  let fixture: ComponentFixture<MedicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicacoesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MedicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
