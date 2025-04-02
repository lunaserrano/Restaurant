export interface OrdenResumen {
    codigoOrden: string;
    area: 'mesa' | 'barra' | 'terraza';
    mesa: string;
    mesero: string;
    total: number;
    fecha: string;
  }
  