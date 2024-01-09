// src\interfaces\formularios\contacto.formulario.ts

export interface ContactoFormInterface {
    username: string;
    password:string;
    confirmarPassword:string;
    email: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    esAtento:boolean;
    rut: string;
    telefono: string;
    region: string;
    comuna: string;
    direccion: string;
    numero: string;
    departamentoCasa: string;
}

export default ContactoFormInterface
