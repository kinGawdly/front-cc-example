// src\components\home\recomendados\recomendados.component.tsx
import { useEffect, useState } from 'react';
import ProductosComponent from './productos.component';
import { ProductosService } from '../../services/producto.services';
import { Cerveza } from '../../interfaces/producto/cerveza';


export function OlvidarComponent() {
  const [recomendados, setPromos] = useState<Cerveza[]>([]);
  const productosPorSlice = 4;
  const slicedCervezas: Cerveza[][] = [];

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await ProductosService.obtenerCervezas();
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
    <ProductosComponent listaProductos={recomendados} titulo="¿Se te olvida algo?" claseProp="recomendados"/>
  );
}

export default OlvidarComponent;