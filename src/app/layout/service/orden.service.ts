import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdenService {
  private ordenesMock = [
    {
      codigoOrden: 'ORD001',
      area: 'mesa',
      mesa: '4',
      mesero: { id: 1, nombre: 'Laura' },
      productos: [
        { id: 1, nombre: 'Pizza', cantidad: 2, precio: 10 },
        { id: 2, nombre: 'Refresco', cantidad: 3, precio: 3 }
      ]
    },
    {
      codigoOrden: 'ORD002',
      area: 'barra',
      mesa: '1',
      mesero: { id: 2, nombre: 'Carlos' },
      productos: [
        { id: 3, nombre: 'Cerveza', cantidad: 2, precio: 5 },
        { id: 4, nombre: 'Taco', cantidad: 4, precio: 4 }
      ]
    }
  ];

  obtenerOrdenPorCodigo(codigo: string): Observable<any> {
    const orden = this.ordenesMock.find(o => o.codigoOrden === codigo);
    return of(orden);
  }
}
