// src\components\home\promos\promos.component.tsx
import { useEffect, useState } from 'react';
import ProductosService from '../../../services/producto.services';
import { Cerveza } from '../../../interfaces/producto/cerveza';

import ProductosComponent from '../../productos/productos.component';


export function PromosComponent() {
  const [promos, setPromos] = useState<Cerveza[]>([]);
  const productosPorSlice = 4;
  const slicedCervezas: Cerveza[][] = [];

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await ProductosService.obtenerPromos();
        setPromos(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    obtenerDatos();
  }, []);
  for (let i = 0; i < promos.length; i += productosPorSlice) {
    slicedCervezas.push(promos.slice(i, i + productosPorSlice));
  }

  return (
    <ProductosComponent listaProductos={promos} titulo="Revisa todas nuestras promociones" claseProp="promos"/>
  );
}

export default PromosComponent;
