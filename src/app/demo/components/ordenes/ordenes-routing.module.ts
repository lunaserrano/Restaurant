import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MainOrdenesComponent } from './main-ordenes/main-ordenes.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent },
  { path: 'list-ordenes', component: MainOrdenesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
