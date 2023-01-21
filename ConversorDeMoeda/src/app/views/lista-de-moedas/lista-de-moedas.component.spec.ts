import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMoedasComponent } from './lista-de-moedas.component';

describe('ListaDeMoedasComponent', () => {
  let component: ListaDeMoedasComponent;
  let fixture: ComponentFixture<ListaDeMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeMoedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
