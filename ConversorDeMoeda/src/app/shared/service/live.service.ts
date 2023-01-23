import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseSymbol } from '../model/responseSymbol.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  API_URL = 'http://api.exchangerate.host';

  constructor(
    private http: HttpClient
  ) { }

  public getSymbols(){
    return this.http.get(`${this.API_URL}/symbols`)
  }

}
