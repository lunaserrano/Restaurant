import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenResumen } from 'src/app/demo/api/ordenes/OrdenResumen';

@Component({
  selector: 'app-pagos',
  standalone: false,
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.scss'
})
export class PagosComponent {
  ordenesPendientes: OrdenResumen[] = [
    {
      codigoOrden: 'ORD001',
      area: 'mesa',
      mesa: '4',
      mesero: 'Laura',
      total: 52,
      fecha: '2025-03-31T12:30:00Z',
    },
    {
      codigoOrden: 'ORD002',
      area: 'barra',
      mesa: '1',
      mesero: 'Carlos',
      total: 21,
      fecha: '2025-03-31T13:05:00Z',
    }
  ];

  constructor(private router: Router) {}

  irAPagar(orden: OrdenResumen) {
    this.router.navigate(['/ordenes/pago', orden.codigoOrden]);
  }
}
