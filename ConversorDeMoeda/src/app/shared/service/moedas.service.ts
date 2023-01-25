import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISimbolo } from '../interface/ISimbolo';
import { ResponsePageable } from '../models/responsePageable.model';


@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  API_URL = 'http://api.exchangerate.host';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSymbolsWithFlag(): Observable<ISimbolo>{
    return this.httpClient.get<ISimbolo>(this.API_URL + '/symbols')
  }


}
