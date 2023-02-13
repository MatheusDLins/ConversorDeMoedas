import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterMoedasComponent } from './views/home/converter-moedas/converter-moedas.component';
import { HistoricoConversoesComponent } from './views/home/historico-conversoes/historico-conversoes.component';
import { ListaDeMoedasComponent } from './views/home/lista-de-moedas/lista-de-moedas.component';
import { PaginaInicialComponent } from './views/home/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'listar-moedas', component: ListaDeMoedasComponent },
  { path: 'converter-moedas', component: ConverterMoedasComponent },
  { path: 'historico-conversoes', component: HistoricoConversoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
