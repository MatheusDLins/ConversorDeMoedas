import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoedasService } from 'src/app/shared/service/moedas.service';

import { ConverterMoedasComponent } from './converter-moedas.component';

describe('ConverterMoedasComponent', () => {
  let converterMoedasComponent: ConverterMoedasComponent;
  let moedasService: MoedasService;

  beforeEach(() => {
    moedasService = new MoedasService(null);
    converterMoedasComponent = new ConverterMoedasComponent(moedasService);
  });

  it('should be created', () => {
    expect(converterMoedasComponent).toBeTruthy();
  });

  it('should save the conversion to the local storage', () => {
    converterMoedasComponent.conversions = [];
    converterMoedasComponent.moedaOrigem = 'BRL';
    converterMoedasComponent.moedaDestino = 'USD';
    converterMoedasComponent.valor = 1;
    converterMoedasComponent.resultado = 0.20;
    converterMoedasComponent.taxa = 0.2;
    converterMoedasComponent.valorEmDolar = 0.20;

    converterMoedasComponent.enviarLocalStorage();

    let conversions = JSON.parse(localStorage.getItem('conversions'));
    expect(conversions).not.toBeNull();
    // expect(conversions.length).toBe(1);
    expect(conversions[0].inputValue).toBe(1);
    expect(conversions[0].inputCurrency).toBe('BRL');
    expect(conversions[0].outputValue).toBe(0.20);
    expect(conversions[0].outputCurrency).toBe('USD');
    expect(conversions[0].rate).toBe(0.2);
    expect(conversions[0].dolarValue).toBe(0.20);
    expect(conversions[0].date).not.toBeNull();
    expect(conversions[0].time).not.toBeNull();
  });

});
