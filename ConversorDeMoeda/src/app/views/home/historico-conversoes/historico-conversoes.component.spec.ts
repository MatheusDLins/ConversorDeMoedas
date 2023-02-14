import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';

import { HistoricoConversoesComponent } from './historico-conversoes.component';
import { MatButton } from '@angular/material/button';

describe('HistoricoConversoesComponent', () => {
  let component: HistoricoConversoesComponent;
  let fixture: ComponentFixture<HistoricoConversoesComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoConversoesComponent],
      imports: [MatTableModule, MatSortModule, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialog,
          useValue: { open: () => ({ afterClosed: () => of(true) }) },
        },
      ],
    }).compileComponents();

    dialog = TestBed.inject(MatDialog);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoConversoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
