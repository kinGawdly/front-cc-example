// src\estados\auth.estado.ts

import { usuarioInfoDTO } from "../dtos/usuarioInfo.dto";

export interface AuthEstado {
    isAdmin: any;
    token: string | null;
    isAuthenticated: boolean;
    usuarioInfo?: usuarioInfoDTO | null;
}
