import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoedasService } from 'src/app/shared/service/moedas.service';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {
  moedas: any[] = [];
  form: FormGroup;
  moedaOrigem: string;
  moedaDestino: string;
  valor: number;
  resultado: any;

  constructor(private moedasService: MoedasService) {
    this.form = new FormGroup({
      moedaOrigem: new FormControl(''),
      moedaDestino: new FormControl(''),
      valor: new FormControl('')
    });
  }

  ngOnInit() {
    this.moedasService.getSymbolsWithFlag().subscribe(data => {
      var resultado =  Object.keys(data.symbols).map(function(moeda){
        let resul = data.symbols[moeda]
        return resul;
      })
      this.moedas = resultado;
    });
  }


  converter() {
    this.moedasService.converter(this.moedaOrigem, this.moedaDestino, this.valor)
    .subscribe(data => {
      this.resultado = data["result"];
    });
}
}
