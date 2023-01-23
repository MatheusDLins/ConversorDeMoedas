import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LiveService } from 'src/app/shared/service/live.service';
import { MoedasService } from 'src/app/shared/service/moedas.service';

@Component({
  selector: 'app-lista-de-moedas',
  templateUrl: './lista-de-moedas.component.html',
  styleUrls: ['./lista-de-moedas.component.css']
})
export class ListaDeMoedasComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'descricao'];
  dataSource: MatTableDataSource<simbolElement>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private moedaService: MoedasService
  ) {

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  obterTodosSimbolos(){
    this.moedaService.obterTodos()
      .then(moedas =>
        console.log((moedas['symbols']))
        )
      .catch(error => console.error(error))
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.obterTodosSimbolos()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface simbolElement {
  codigo: string;
  descricao: string;
}

var listaMoedas: [] = [];

var ELEMENT_DATA: simbolElement[] = [
  { codigo: 'USD', descricao: 'United States Dollar'},
  { codigo: 'PYG', descricao: 'Paraguayan Guarani'},
  { codigo: 'BRL', descricao: 'Brazilian Real'},
  { codigo: 'GNF',descricao: 'Guinean Franc'},
  { codigo: 'JMD', descricao: 'Jamaican Dollar'},
  { codigo: 'CNY', descricao: 'Chinese Yuan'},
  { codigo: 'DJF', descricao: 'Djiboutian Franc'},
  { codigo: 'JOD', descricao: 'Jordanian Dinar'},
  { codigo: 'FJD', descricao: 'Fijian Dollar'},
  { codigo: 'AOA', descricao: 'Angolan Kwanza'},
];
