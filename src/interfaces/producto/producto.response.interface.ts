export type ProductoResponseInterface = {
  readonly id: number;
  readonly Nombre: string;
  readonly precio_venta: number;
  readonly precio_descuento: number;
  readonly estrellas: number;
  readonly url_imagen: string;
}

export default ProductoResponseInterface;
