import { ViewChild, Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MoedasService } from 'src/app/shared/service/moedas.service';

interface ConversionData {
  date: string;
  time: string;
  inputValue: number;
  inputCurrency: string;
  outputValue: number;
  outputCurrency: string;
  rate: number[];
  dolarValue: number;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico-conversoes.component.html',
  styleUrls: ['./historico-conversoes.component.css']
})
export class HistoricoConversoesComponent implements OnInit {


  constructor(private moedasService: MoedasService){}

  displayedColumns: string[] = ['date', 'time', 'inputValue', 'inputCurrency', 'outputValue', 'outputCurrency', 'rate', 'delete'];
  dataSource = new MatTableDataSource<ConversionData>();
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.data = JSON.parse(localStorage.getItem('conversions')) || [];
    this.dataSource.sort = this.sort;
  }

  delete(element: ConversionData) {
    const index = this.dataSource.data.indexOf(element);
    this.dataSource.data.splice(index, 1);
    localStorage.setItem('conversions', JSON.stringify(this.dataSource.data));
    this.dataSource.data = JSON.parse(localStorage.getItem('conversions')) || [];
  }


}
