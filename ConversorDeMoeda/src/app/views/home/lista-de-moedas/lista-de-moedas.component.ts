import { ChangeDetectorRef } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IMoedas } from 'src/app/shared/interface/Imoedas';
import { ISimbolo } from 'src/app/shared/interface/ISimbolo';
import { Symbols } from 'src/app/shared/models/symbols.model';
import { MoedasService } from 'src/app/shared/service/moedas.service';

@Component({
  selector: 'app-lista-de-moedas',
  templateUrl: './lista-de-moedas.component.html',
  styleUrls: ['./lista-de-moedas.component.css']
})
export class ListaDeMoedasComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<IMoedas>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  tabelaTeste: IMoedas[] = [];

  constructor(
    public moedasService: MoedasService,
  ) {
    this.dataSource = new MatTableDataSource(this.tabelaTeste);
  }

  ngOnInit() {
    this.getSimbolos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSimbolos(){
    this.moedasService.getSymbolsWithFlag().subscribe((data:ISimbolo) => {

      var resultado =  Object.keys(data.symbols).map(function(moeda){
        let resul = data.symbols[moeda]

        return resul;
      })
      //console.log(resultado);
      this.tabelaTeste = resultado;
      this.dataSource = new MatTableDataSource(this.tabelaTeste);

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

var ELEMENT_DATA: any[] = [
  { code: 'USD1', description: 'United States Dollar'},
  { code: 'PYG', description: 'Paraguayan Guarani'},
  { code: 'BRL', description: 'Brazilian Real'},
  { code: 'GNF',description: 'Guinean Franc'},
  { code: 'JMD', description: 'Jamaican Dollar'},
  { code: 'CNY', description: 'Chinese Yuan'},
  { code: 'DJF', description: 'Djiboutian Franc'},
  { code: 'JOD', description: 'Jordanian Dinar'},
  { code: 'FJD', description: 'Fijian Dollar'},
  { code: 'AOA', description: 'Angolan Kwanza'},
  { code: 'USD', description: 'United States Dollar'},
  { code: 'PYG', description: 'Paraguayan Guarani'},
  { code: 'BRL', description: 'Brazilian Real'},
  { code: 'GNF',description: 'Guinean Franc'},
  { code: 'JMD', description: 'Jamaican Dollar'},
  { code: 'CNY', description: 'Chinese Yuan'},
  { code: 'DJF', description: 'Djiboutian Franc'},
  { code: 'JOD', description: 'Jordanian Dinar'},
  { code: 'FJD', description: 'Fijian Dollar'},
  { code: 'AOA', description: 'Angolan Kwanza'},
  { code: 'USD', description: 'United States Dollar'},
  { code: 'PYG', description: 'Paraguayan Guarani'},
  { code: 'BRL', description: 'Brazilian Real'},
  { code: 'GNF',description: 'Guinean Franc'},
  { code: 'JMD', description: 'Jamaican Dollar'},
  { code: 'CNY', description: 'Chinese Yuan'},
  { code: 'DJF', description: 'Djiboutian Franc'},
  { code: 'JOD', description: 'Jordanian Dinar'},
  { code: 'FJD', description: 'Fijian Dollar'},
  { code: 'AOA', description: 'Angolan Kwanza'},
  { code: 'USD', description: 'United States Dollar'},
  { code: 'PYG', description: 'Paraguayan Guarani'},
  { code: 'BRL', description: 'Brazilian Real'},
  { code: 'GNF',description: 'Guinean Franc'},
  { code: 'JMD', description: 'Jamaican Dollar'},
  { code: 'CNY', description: 'Chinese Yuan'},
  { code: 'DJF', description: 'Djiboutian Franc'},
  { code: 'JOD', description: 'Jordanian Dinar'},
  { code: 'FJD', description: 'Fijian Dollar'},
  { code: 'AOA', description: 'Angolan Kwanza'},
  { code: 'USD', description: 'United States Dollar'},
  { code: 'PYG', description: 'Paraguayan Guarani'},
  { code: 'BRL', description: 'Brazilian Real'},
  { code: 'GNF',description: 'Guinean Franc'},
  { code: 'JMD', description: 'Jamaican Dollar'},
  { code: 'CNY', description: 'Chinese Yuan'},
  { code: 'DJF', description: 'Djiboutian Franc'},
  { code: 'JOD', description: 'Jordanian Dinar'},
  { code: 'FJD', description: 'Fijian Dollar'},
  { code: 'AOA', description: 'Angolan Kwanza'},

];

