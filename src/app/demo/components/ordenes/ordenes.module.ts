import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
     // Mueve PedidosComponent aquí
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    PedidosComponent,
    TabViewModule
  ]
})
export class OrdenesModule { }
