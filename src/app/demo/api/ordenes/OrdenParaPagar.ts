import { Mesero } from "./Mesero";
import { ProductoOrden } from "./ProductoOrden";

export interface OrdenParaPagar {
    codigoOrden: string;
    area: 'mesa' | 'barra' | 'terraza';
    mesa: string;
    mesero: Mesero;
    productos: ProductoOrden[];
  }
