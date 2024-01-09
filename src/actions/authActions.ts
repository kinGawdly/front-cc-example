// src/actions/authActions.ts

import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { jwtDecode } from 'jwt-decode';

import { AuthActionTypes, LoginAction } from '../types/authTypes';

import { UsuarioLoginDto } from "../dtos/usuario.dto";
import { usuarioInfoDTO } from "../dtos/usuarioInfo.dto";
import { API_BASE_URL, API_ENDPOINTS } from '../config';

export function login(userData: UsuarioLoginDto): ThunkAction<void, any, null, AuthActionTypes> {
    return async (dispatch: Dispatch<AuthActionTypes>) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const decodedToken = jwtDecode<usuarioInfoDTO>(data.access_token);

            console.log(decodedToken)
            dispatch<LoginAction>({
                type: 'LOGIN',
                payload: {
                    access_token: data.access_token,
                    usuarioInfo: decodedToken,
                },
            });
            console.info("Login exitoso, token de acceso:", data.access_token);
        } catch (error) {
            console.error('Error en el login:', error);
        }
    };
}
