// acciones/productosAcciones.ts
import { Dispatch } from 'redux';
import { setProductos } from '../reducers/productosReducer';
import ProductosService from '../services/producto.services';


export const cargarProductos = () => {
  return (dispatch: Dispatch) => {
    ProductosService.obtenerRecomendados().then((productos) => {
      dispatch(setProductos(productos));
    });
  };
};
