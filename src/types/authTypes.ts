// src/types/authTypes.ts

export interface LoginAction {
    type: 'LOGIN';
    payload: {
        access_token: string;
        usuarioInfo?: {
            id: number;
            username: string;
            isAdmin: boolean;
        }  | null;
    };
}

export interface LogoutAction {
    type: 'LOGOUT';
}

export type AuthActionTypes = LoginAction | LogoutAction;
