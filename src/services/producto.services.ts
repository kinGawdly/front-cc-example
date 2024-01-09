// src\services\producto.services.ts

import { CreateProductoDto, UpdateProductoDto } from "../components/admin/dtos.admin";

const API_URL = 'http://atari.mta.cl:35000';

const handleRequest = async (endpoint: string, errorMessage: string, token: string, options = {}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Autorizacion': `${token}`,
    };
    const response = await fetch(`${API_URL}/${endpoint}`, { headers, ...options });
    if (!response.ok) {
      throw new Error(`Error al obtener ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Error en la solicitud de ${errorMessage}`);
  }
};

const handlePublicRequest = async (endpoint: string, errorMessage: string) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    console.log(response)
    if (!response.ok) {
      throw new Error(`Error al obtener ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Error en la solicitud de ${errorMessage}`);
  }
};

export const ProductosService = {

  obtenerCervezas: async () => {
    return handlePublicRequest('productos', 'cervezas');
  },

  obtenerCerveza: async (id: number) => {
    return handlePublicRequest(`productos/${id}`, 'cerveza');
  },

  obtenerRecomendados: async () => {
    return handlePublicRequest('productos/recomendados', 'productos recomendados');
  },

  obtenerPromos: async () => {
    return handlePublicRequest('productos/promos', 'productos en promoción');
  },

  crearProducto: async (dto: CreateProductoDto, token: string) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(dto),
    };
    return handleRequest('productos', 'crear producto', token, requestOptions);
  },

  actualizarProducto: async (id: number, dto: UpdateProductoDto, token: string) => {
    const requestOptions = {
      method: 'PATCH',
      body: JSON.stringify(dto),
    };
    return handleRequest(`productos/${id}`, 'actualizar producto', token, requestOptions);
  },

  eliminarProducto: async (id: number, token: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      const requestOptions = {
        method: 'DELETE',
      };
      return handleRequest(`productos/${id}`, 'eliminar producto', token, requestOptions);
    }
  },
};

export default ProductosService;
