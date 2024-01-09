import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { eliminarDelCarrito } from '../../actions/carritoActions';


import Basurero from '/productos/trash.png';

import { useSelector } from 'react-redux';
import { EstadoGlobal } from '../../estados/global.estado';
import OlvidarComponent from '../productos/lista-olvidar.component';


export function CarritoLista() {
  const dispatch = useDispatch();
  const carritoState = useSelector((state: EstadoGlobal) => state.carrito);
  const productosDelCarrito = carritoState.productos

  const handleEliminarProducto = (productoId: number) => {
    dispatch(eliminarDelCarrito(productoId));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Carrito</span>
        </div>
        <div className="col-6"></div>
      </div>

      <div className="row">
        <div className="row mb-5">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="row">
              <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#2840AE', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>1</div>
              <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#E9ECEF', color: '#BABDBF', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>2</div>
              <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#E9ECEF', color: '#BABDBF', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>3</div>
              <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#E9ECEF', color: '#BABDBF', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>4</div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={10}>
                  <div style={{ color: '#20338B', fontSize: 36, fontFamily: 'Montserrat Alternates', fontWeight: '700', wordWrap: 'break-word' }}>Tu Carrito</div>
                </th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Precio</th>
                <th scope="col">Unidades</th>
                <th scope="col">Precio Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {productosDelCarrito.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <img
                      width={100}
                      src={producto.base64_imagen_card ? `http://atari.mta.cl:35000/${producto.base64_imagen_card}` : '/cerveza_default.png'}
                      alt={`Imagen de ${producto.nombre_producto}`}
                    />
                  </td>
                  <td className={'align-middle'}><strong>{producto.nombre_producto}</strong></td>
                  <td className={'align-middle'}>{producto.precio_venta}</td>
                  <td className={'align-middle'}>{producto.cantidad}</td>
                  <td className={'align-middle'}>{(producto.precio_venta || 0) * (producto.cantidad || 0)}</td>
                  <td className={'align-middle'}>
                    <div className="row">
                      <div className="col-10"></div>
                      <div className="col-2">
                        <img
                          src={Basurero}
                          onClick={() => handleEliminarProducto(producto.id)}
                          style={{ cursor: 'pointer' }}
                          alt="Eliminar"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Link to="/">
                    Seguir comprando
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-8">
                      <Link to="/contacto" className="btn btn-primary">
                        Completa tus datos
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='"row'>
          <OlvidarComponent />
        </div>
      </div>
    </div>
  );
}

export default CarritoLista;
