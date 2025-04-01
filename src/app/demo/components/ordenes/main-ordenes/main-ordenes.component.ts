import { Component, OnInit } from '@angular/core';
import { OrdenParaPagar } from 'src/app/demo/api/ordenes/OrdenParaPagar';
import { PagoCuentaSeparada, PagoCuentaUnida } from 'src/app/demo/api/ordenes/PagoCuentaUnida';

@Component({
  selector: 'app-main-ordenes',
  standalone: false,
  templateUrl: './main-ordenes.component.html',
  styleUrl: './main-ordenes.component.scss'
})
export class MainOrdenesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   
  }

  orden: OrdenParaPagar = {
    codigoOrden: 'ORD123',
    area: 'mesa',
    mesa: '5',
    mesero: { id: 1, nombre: 'Juan' },
    productos: [
      { id: 1, nombre: 'Pizza', cantidad: 2, precio: 10 },
      { id: 2, nombre: 'Refresco', cantidad: 3, precio: 3 }
    ]
  };

  tipoPago: 'cuentaUnida' | 'cuentasSeparadas' = 'cuentaUnida';

  metodosPago = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Tarjeta', value: 'tarjeta' },
    { label: 'Mixto', value: 'mixto' }
  ];

  pagoUnico: PagoCuentaUnida = {
    metodo: 'efectivo',
    montoRecibido: 0,
    detalleMixto: { efectivo: 0, tarjeta: 0 }
  };

  pagosSeparados: PagoCuentaSeparada[] = [];

  calcularTotal(): number {
    return this.orden.productos.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );
  }

  agregarCliente() {
    this.pagosSeparados.push({
      nombreCliente: '',
      productos: [],
      metodo: 'efectivo',
      montoRecibido: 0,
      detalleMixto: { efectivo: 0, tarjeta: 0 }
    });
  }

  calcularSubtotalCliente(cliente: PagoCuentaSeparada): number {
    return cliente.productos.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );
  }

  calcularCambioCliente(cliente: PagoCuentaSeparada): number {
    const subtotal = this.calcularSubtotalCliente(cliente);
    return (cliente.montoRecibido ?? 0) - subtotal;
  }

  confirmarPago() {
    if (this.tipoPago === 'cuentaUnida') {
      const total = this.calcularTotal();
      let pagado = 0;

      if (this.pagoUnico.metodo === 'efectivo') {
        pagado = this.pagoUnico.montoRecibido ?? 0;
      } else if (this.pagoUnico.metodo === 'mixto') {
        pagado =
          (this.pagoUnico.detalleMixto?.efectivo ?? 0) +
          (this.pagoUnico.detalleMixto?.tarjeta ?? 0);
      } else {
        pagado = total; // tarjeta
      }

      if (pagado < total) {
        alert('El monto pagado es insuficiente');
        return;
      }

      console.log('Pago cuenta unida:', {
        orden: this.orden,
        tipoPago: 'cuentaUnida',
        pagoUnico: this.pagoUnico,
        total,
        fechaPago: new Date().toISOString()
      });
    }

    if (this.tipoPago === 'cuentasSeparadas') {
      const total = this.calcularTotal();
      const sumaSubtotales = this.pagosSeparados.reduce(
        (sum, cliente) => sum + this.calcularSubtotalCliente(cliente),
        0
      );

      if (sumaSubtotales < total) {
        alert('La suma de los pagos separados no cubre el total de la orden');
        return;
      }

      console.log('Pago cuentas separadas:', {
        orden: this.orden,
        tipoPago: 'cuentasSeparadas',
        pagosSeparados: this.pagosSeparados,
        total,
        fechaPago: new Date().toISOString()
      });
    }
  }

}
