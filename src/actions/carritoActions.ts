// src\actions\carritoActions.ts
import ProductoCarritoDto from "../dtos/producto.carrito.dto";
import { AGREGAR_AL_CARRITO, ELIMINAR_DEL_CARRITO } from '../types/carritoActionTypes';

export const agregarAlCarrito = (producto: ProductoCarritoDto) => ({
    type: AGREGAR_AL_CARRITO,
    payload: producto,
});

export const eliminarDelCarrito = (productoId: number) => ({
    type: ELIMINAR_DEL_CARRITO,
    payload: productoId,
});
