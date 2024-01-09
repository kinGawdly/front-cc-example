interface DetalleCerveza {
    id: number;
    sku?: string;
    estrellas?: number;
    tipo?: string;
    grado_alcoholico?: string;
    amargor_ibu?: string;
    nombre_producto?: string;
    precio_compra?: number;
    precio_venta?: number;
    is_recomendado?: boolean;
    casa_cervecera?: string;
    base64_imagen_card: string;
    base64_imagen_detalle: string;
    is_promo?: boolean;
    volumen_cc?: number;
    detalle?: string;
    stock?: number;
    precio_descuento?: number;
  }

export default DetalleCerveza;
