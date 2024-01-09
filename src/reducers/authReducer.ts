// src/reducers/authReducer.ts
import { AuthEstado } from "../estados/auth.estado";
import { AuthActionTypes } from "../types/authTypes";

const initialState: AuthEstado = {
    token: null,
    isAuthenticated: false,
    isAdmin: false
};


const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.access_token,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
