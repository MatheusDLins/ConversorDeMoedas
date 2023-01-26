import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoConversoesComponent } from './historico-conversoes.component';

describe('HistoricoConversoesComponent', () => {
  let component: HistoricoConversoesComponent;
  let fixture: ComponentFixture<HistoricoConversoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoConversoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoConversoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
