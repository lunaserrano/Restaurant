import { ProductoOrden } from "./ProductoOrden";

type MetodoPago = 'efectivo' | 'tarjeta' | 'mixto';

export interface PagoCuentaUnida {
  metodo: MetodoPago;
  montoRecibido?: number;
  detalleMixto?: {
    efectivo: number;
    tarjeta: number;
  };
}

export interface PagoCuentaSeparada {
  nombreCliente: string;
  productos: ProductoOrden[];
  metodo: MetodoPago;
  montoRecibido?: number;
  detalleMixto?: {
    efectivo: number;
    tarjeta: number;
  };
  tarjeta?: {
    numero: string;
    vencimiento: string;
    cvv: string;
    titular: string;
  };
}