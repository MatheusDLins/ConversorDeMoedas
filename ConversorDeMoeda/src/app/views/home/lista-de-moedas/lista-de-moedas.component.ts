import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IMoedas } from 'src/app/shared/interface/Imoedas';
import { ISimbolo } from 'src/app/shared/interface/ISimbolo';
import { MoedasService } from 'src/app/shared/service/moedas.service';

@Component({
  selector: 'app-lista-de-moedas',
  templateUrl: './lista-de-moedas.component.html',
  styleUrls: ['./lista-de-moedas.component.css']
})
export class ListaDeMoedasComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<IMoedas>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  listaDeMoedas: IMoedas[] = [];

  constructor(
    public moedasService: MoedasService,
  ) {
  }

  ngOnInit() {
    this.getSimbolos();
  }
  ngAfterViewInit() {

  }

  getSimbolos(){
    this.moedasService.getSymbolsWithFlag().subscribe((data:ISimbolo) => {
      var resultado =  Object.keys(data.symbols).map(function(moeda){
        let resul = data.symbols[moeda]
        return resul;
      })
      this.listaDeMoedas = resultado;
      this.dataSource = new MatTableDataSource(this.listaDeMoedas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
