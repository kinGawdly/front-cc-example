// src\estados\global.estado.ts

import { AuthEstado } from "./auth.estado";
import { CarritoEstado } from "./carrito.estado";
import { CarrouselEstado } from "./carrousel.estado"; // Import the missing type


export interface EstadoGlobal {
    carousel: CarrouselEstado;
    auth: AuthEstado;
    carrito: CarritoEstado;
}
