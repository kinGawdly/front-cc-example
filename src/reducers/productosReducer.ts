// reducers/productosReducer.ts
interface Producto {
    id: number;
    nombre: string;
    precio_venta: number;
    precio_descuento: number;
    estrellas: number;
    url_imagen: string;
  }
  
  interface ProductosState {
    productos: Producto[];
  }
  
  const initialState: ProductosState = {
    productos: [],
  };
  
  const SET_PRODUCTOS = 'SET_PRODUCTOS';
  
  export const setProductos = (productos: Producto[]) => ({
    type: SET_PRODUCTOS,
    payload: productos,
  });
  
  type ProductosAction = ReturnType<typeof setProductos>;
  
  const productosReducer = (state = initialState, action: ProductosAction): ProductosState => {
    switch (action.type) {
      case SET_PRODUCTOS:
        return {
          ...state,
          productos: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productosReducer;
  