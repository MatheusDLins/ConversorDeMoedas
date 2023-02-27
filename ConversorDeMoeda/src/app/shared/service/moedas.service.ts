import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISimbolo } from '../interface/ISimbolo';

@Injectable({
  providedIn: 'root',
})
export class MoedasService {
  API_URL = 'https://cors-anywhere.herokuapp.com/http://api.exchangerate.host';

  constructor(private http: HttpClient) {}

  public getSymbolsWithFlag(): Observable<ISimbolo> {
    return this.http.get<ISimbolo>(this.API_URL + '/symbols');
  }

  public converter(moedaOrigem: string, moedaDestino: string, valor: number) {
    const url = `${this.API_URL}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
    return this.http.get(url);
  }

}
