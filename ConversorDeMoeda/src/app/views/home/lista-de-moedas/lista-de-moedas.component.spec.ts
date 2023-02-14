import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { IMoedas } from 'src/app/shared/interface/Imoedas';
import { ISimbolo } from 'src/app/shared/interface/ISimbolo';
import { MoedasService } from 'src/app/shared/service/moedas.service';
import { ListaDeMoedasComponent } from './lista-de-moedas.component';
import { By } from '@angular/platform-browser';

describe('ListaDeMoedasComponent', () => {
  let component: ListaDeMoedasComponent;
  let fixture: ComponentFixture<ListaDeMoedasComponent>;
  let httpMock: HttpTestingController;
  let moedasService: MoedasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatPaginatorModule
      ],
      declarations: [ListaDeMoedasComponent],
      providers: [MoedasService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeMoedasComponent);
    component = fixture.componentInstance;
    moedasService = TestBed.inject(MoedasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call MoedasService.getSymbolsWithFlag and set listaDeMoedas and dataSource', () => {
    const simbolo: ISimbolo = {
      motd: [],
      success: true,
      symbols: [
        { description: 'United States Dollar', code: 'USD' },
        { description: 'Euro', code: 'EUR' },
      ]
    ,
    };
    const moedas: IMoedas[] = [
      { code: 'USD', description: 'United States Dollar' },
      { code: 'EUR', description: 'Euro' },
    ];

    const getSimbolosSpy = spyOn(moedasService, 'getSymbolsWithFlag').and.returnValue(
      of(simbolo)
    );

    component.getSimbolos();

    expect(getSimbolosSpy).toHaveBeenCalled();
    expect(component.listaDeMoedas).toEqual(moedas);
    expect(component.dataSource.data).toEqual(moedas);
  });
});
