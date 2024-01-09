// src\components\admin\dtos.admin.ts

export class ProductoDtoAdmin {
  id?: number;
  casa_cervecera_id?: number = 1;
  tipo?: string = '';
  grado_alcoholico?: string = '';
  amargor_ibu?: string = '';
  nombre_producto?: string = '';
  precio_compra?: number = 0;
  precio_venta?: number = 0;
  is_recomendado?: boolean = false;
  image_card_base64?: string = '';
  image_detalle_base64?: string = '';
  is_promo?: boolean = false;
  detalle?: string = '';
  stock?: number = 0;
  precio_descuento?: number = 0;
  sku?: string = '';
}

export class ProductoRespuestaDtoAdmin {
  id: number = 0;
  sku: string = '';
  estrellas: number = 0;
  tipo: string = '';
  grado_alcoholico: string = '';
  amargor_ibu: string = '';
  nombre_producto: string = '';
  precio_compra: number = 0;
  precio_venta: number = 0;
  is_recomendado: boolean = true;
  casa_cervecera: string = '';
  base64_imagen_card: string = '';
  base64_imagen_detalle: string = '';
  is_promo: boolean = true;
  volumen_cc: number = 0;
  detalle: string = '';
  stock: number = 0;
  precio_descuento: number = 0;
  packs: string[] = [];
}

export class CreateProductoDto {
  sku: string = '';
  tipo: string = '';
  grado_alcoholico: string = '';
  amargor_ibu: string = '';
  nombre_producto: string = '';
  precio_venta: number = 0;
  is_recomendado: boolean = true;
  casa_cervecera: string = '';
  base64_imagen_card: string = '';
  base64_imagen_detalle: string = '';
  is_promo: boolean = true;
  volumen_cc: number = 0;
  detalle: string = '';
  stock: number = 0;
  precio_descuento: number = 0;
}

export class UpdateProductoDto {
  sku?: string = '';
  tipo?: string = '';
  grado_alcoholico?: string = '';
  amargor_ibu?: string = '';
  nombre_producto?: string = '';
  precio_venta?: number = 0;
  is_recomendado?: boolean = true;
  casa_cervecera?: string = '';
  base64_imagen_card?: string = '';
  base64_imagen_detalle?: string = '';
  is_promo?: boolean = true;
  volumen_cc?: number = 0;
  detalle?: string = '';
  stock?: number = 0;
  precio_descuento?: number = 0;
}
