// src/estados/carrito.estado.ts

import ProductoCarritoDto from "../dtos/producto.carrito.dto";

export interface CarritoEstado {
  tipo: string;
  monto: number;
  forma_pago: string;
  total: number;
  descuento: number;
  productos: ProductoCarritoDto[];
  contacto: ContactoDTO;
  usuario: string;
}

export default CarritoEstado;

