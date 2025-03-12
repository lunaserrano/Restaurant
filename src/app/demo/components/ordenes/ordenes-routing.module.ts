import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
          { path: 'pedidos', data: { breadcrumb: 'Pedidos' }, loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class OrdenesRoutingModule { }