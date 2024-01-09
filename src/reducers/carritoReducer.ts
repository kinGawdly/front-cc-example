// src\reducers\carritoReducer.ts

import ProductoCarritoDto from "../dtos/producto.carrito.dto";
import CarritoEstado from "../estados/carrito.estado";
import { AGREGAR_AL_CARRITO, ELIMINAR_DEL_CARRITO } from "../types/carritoActionTypes";

type CarritoAccion = 
    | { type: typeof AGREGAR_AL_CARRITO; payload: ProductoCarritoDto }
    | { type: typeof ELIMINAR_DEL_CARRITO; payload: number };

// del tipo CarritoEstado      
const initialState: CarritoEstado = {
    productos: [],
    tipo: "",
    monto: 0,
    forma_pago: "",
    total: 0,
    descuento: 0,
    contacto: {
        calle_numero: "",
        is_novedades: false,
        email: "",
        nombres: "",
        apellidos: "",
        rut: "",
        telefono: "",
        comuna_id: 0,
        depto_casa: "",
    },
    usuario: "",
};

const carritoReducer = (state: CarritoEstado = initialState, action: CarritoAccion): CarritoEstado => {
    switch (action.type) {
        case AGREGAR_AL_CARRITO:
            if (!state.productos.find(p => p.id === action.payload.id)) {
                return { ...state, productos: [...state.productos, action.payload] };
            }
            return state;

        case ELIMINAR_DEL_CARRITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload),
            };

        default:
            return state;
    }
};

export default carritoReducer;
