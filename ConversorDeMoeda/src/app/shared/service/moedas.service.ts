import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISimbolo } from '../interface/ISimbolo';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  API_URL = 'http://api.exchangerate.host';

  constructor(private http: HttpClient) { }

  obterTodos(){
    return this.http.get<ISimbolo[]>(`${this.API_URL}/symbols`).toPromise()
  }
}
