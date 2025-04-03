import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenParaPagar } from 'src/app/demo/api/ordenes/OrdenParaPagar';
import { PagoCuentaSeparada, PagoCuentaUnida } from 'src/app/demo/api/ordenes/PagoCuentaUnida';
import { ProductoOrden } from 'src/app/demo/api/ordenes/ProductoOrden';
import { OrdenService } from 'src/app/layout/service/orden.service';

@Component({
  selector: 'app-main-ordenes',
  standalone: false,
  templateUrl: './main-ordenes.component.html',
  styleUrl: './main-ordenes.component.scss'
})
export class MainOrdenesComponent implements OnInit {
  orden: OrdenParaPagar | any = null;
  productosSeleccionados: ProductoOrden[] = [];
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

  constructor(
    private route: ActivatedRoute,
    private ordenService: OrdenService
  ) {}

  ngOnInit(): void {
    const codigoOrden = this.route.snapshot.paramMap.get('codigoOrden');
    if (codigoOrden) {
      this.ordenService.obtenerOrdenPorCodigo(codigoOrden).subscribe((data) => {
        if (data) {
          this.orden = data;
        } else {
          alert('Orden no encontrada');
        }
      });
    }
  }

  calcularTotal(): number {
    return this.orden?.productos.reduce(
      (sum: number, item: ProductoOrden) => sum + item.precio * item.cantidad,
      0
    ) || 0;
  }

  agregarCliente() {
    const nuevosProductos = [...this.productosSeleccionados];
  
    this.pagosSeparados.push({
      nombreCliente: '',
      productos: nuevosProductos,
      metodo: 'efectivo',
      montoRecibido: 0,
      detalleMixto: { efectivo: 0, tarjeta: 0 },
      tarjeta: { numero: '', vencimiento: '', cvv: '', titular: '' }
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
      const pagados = this.pagosSeparados.flatMap(cliente => cliente.productos.map(p => p.id));
      this.orden.productos = this.orden.productos.filter(p => !pagados.includes(p.id));

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
