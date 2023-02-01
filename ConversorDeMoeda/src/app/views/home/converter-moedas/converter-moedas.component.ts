import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoedasService } from 'src/app/shared/service/moedas.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css'],
})
export class ConverterMoedasComponent implements OnInit {
  conversions = [];
  date: string;
  time: string;
  moedas: any[] = [];
  form: FormGroup;
  moedaOrigem: string;
  moedaDestino: string;
  valor: number;
  resultado: any;
  taxa: any;
  valorEmDolar: number;

  constructor(private moedasService: MoedasService) {
    this.form = new FormGroup({
      moedaOrigem: new FormControl(''),
      moedaDestino: new FormControl(''),
      valor: new FormControl(''),
    });
  }



  // listar moedas
  ngOnInit() {
    this.carregarLocalStorage();
    this.moedasService.getSymbolsWithFlag().subscribe((data) => {
      var resultado = Object.keys(data.symbols).map(function (moeda) {
        let resul = data.symbols[moeda];
        return resul;
      });
      this.moedas = resultado;
    });
  }

  converter() {
    this.moedasService
      .converter(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe((data) => {
        this.resultado = data['result'];
        this.taxa = Object.values(data['info']);
        this.conferir();
        // this.enviarLocalStorage();
        this.carregarLocalStorage();
      });
  }

  conferir() {
    this.moedasService
      .converter(this.moedaDestino, 'USD', this.resultado)
      .subscribe((data) => {
        this.valorEmDolar = data['result'];
        this.enviarLocalStorage();
      });
  }

  carregarLocalStorage(){
    this.conversions = JSON.parse(localStorage.getItem('conversions')) || [];
  }

  enviarLocalStorage(){
    var date = new Date();
    var optionsDate: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    var optionsTime: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    this.date = date.toLocaleDateString('pt-BR', optionsDate);
    this.time = date.toLocaleTimeString('pt-BR', optionsTime);

    var conversion = {
    date: this.date,
    time: this.time,
      inputValue: this.valor,
      inputCurrency: this.moedaOrigem,
      outputValue: this.resultado,
      outputCurrency: this.moedaDestino,
      rate: this.taxa,
      dolarValue: this.valorEmDolar
    };

    this.conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    this.conversions.push(conversion);
    localStorage.setItem('conversions', JSON.stringify(this.conversions));
  }
}
