import { Routes } from '@angular/router';
import { MainOrderComponent } from './main-order/main-order.component';
import { Ordertest } from './ordertest';

export default [
    { path: 'order', data: { breadcrumb: 'MainOrderComponent' }, component: MainOrderComponent },
    { path: 'ordertest', data: { breadcrumb: 'Ordertest' }, component: Ordertest },
    { path: '**', redirectTo: '/notfound' }
] as Routes;