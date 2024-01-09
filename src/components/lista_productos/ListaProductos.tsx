// componentes/ListaProductos.tsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cargarProductos } from '../../actions/productosActions';

interface Producto {
  id: number;
  nombre: string;
  precio_venta: number;
  precio_descuento: number;
  estrellas: number;
  url_imagen: string;
}

interface ListaProductosProps {
  productos: Producto[];
  cargarProductos: () => void;
}

const ListaProductos: React.FC<ListaProductosProps> = ({ productos, cargarProductos }) => {
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos]);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  productos: state.productos.productos,
});

export default connect(mapStateToProps, { cargarProductos })(ListaProductos);
