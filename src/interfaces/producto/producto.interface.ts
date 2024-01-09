export interface Producto {
    id: number;
    nombre_producto: string;
    precio_venta: number;
    precio_descuento: number;
    estrellas: number;
    base64_imagen_card: string;
}

export interface ProductoProps {
    producto: Producto;
}
