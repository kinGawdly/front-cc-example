// src\components\home\recomendados\recomendados.component.tsx
import { useEffect, useState } from 'react';
import ProductosService from '../../../services/producto.services';
import { Cerveza } from '../../../interfaces/producto/cerveza';
import ProductosComponent from '../../productos/productos.component';

export function RecomendadosComponent() {
  const [recomendados, setPromos] = useState<Cerveza[]>([]);
  const productosPorSlice = 4;
  const slicedCervezas: Cerveza[][] = [];

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await ProductosService.obtenerRecomendados();
        setPromos(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    obtenerDatos();
  }, []);

  for (let i = 0; i < recomendados.length; i += productosPorSlice) {
    slicedCervezas.push(recomendados.slice(i, i + productosPorSlice));
  }

  return (
    <ProductosComponent listaProductos={recomendados} titulo="La recomendación de los expertos" claseProp="recomendados"/>
  );
}

export default RecomendadosComponent;