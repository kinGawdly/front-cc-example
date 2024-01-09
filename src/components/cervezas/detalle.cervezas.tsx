// src\components\cervezas\detalle.cervezas.tsx

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DetalleCerveza from '../../interfaces/producto/cerveza.detalle';
import ProductosService from '../../services/producto.services';

import carritoBtn from '/productos/shopping-cart.png';
import Estrella from '/productos/star.png';

import { Alert, Card, Form } from 'react-bootstrap';
import ProductoCarritoDto from '../../dtos/producto.carrito.dto';
import './detalle.cervezas.css';


import { agregarAlCarrito } from '../../actions/carritoActions';
import TePodriaComponent from '../productos/lista-gutar.component';

// en caso de necesitar el token
// import { EstadoGlobal } from '../../estados/global.estado';
// import { useSelector } from 'react-redux';
// function useAuthState() {
//   return useSelector((state: EstadoGlobal) => state.auth);
// }

export function CervezaDetalle() {
  // const authState = useAuthState();
  // const token = authState.token || "";
  const dispatch = useDispatch();
  const { id } = useParams();
  const [cerveza, setCerveza] = useState<DetalleCerveza | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cervezaData = await ProductosService.obtenerCerveza(Number(id));
        setCerveza(cervezaData);
      } catch (error) {
        console.error('Error al obtener la cerveza:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!cerveza) {
    return <p>Cargando...</p>;
  }

  const renderEstrellas = () => {
    const estrellasLlenas = Math.floor(cerveza.estrellas || 0);
    const estrellaMedia = cerveza.estrellas || 0 - estrellasLlenas > 0.5;

    const estrellasLlenasArray = Array.from({ length: estrellasLlenas }, (_, index) => (
      <img key={index} src={Estrella}></img>
    ));

    const estrellaMediaComponent = estrellaMedia ? (
      <i key="media" className="bi bi-star-half"></i>
    ) : null;

    const estrellasVaciasArray = Array.from(
      { length: Math.max(0, 5 - estrellasLlenas - (estrellaMedia ? 1 : 0)) },
      (_, index) => <img key={index + estrellasLlenas} src={Estrella}></img>
    );

    return [...estrellasLlenasArray, estrellaMediaComponent, ...estrellasVaciasArray];
  };

  const handleAgregarAlCarrito = () => {
    const { id, nombre_producto, precio_venta, estrellas, base64_imagen_card } = cerveza;

    const cantidadInput = document.querySelector(`#cantidad-${id}`) as HTMLInputElement;
    const cantidad = cantidadInput ? parseInt(cantidadInput.value) : 1;

    const producto: ProductoCarritoDto = {
      id,
      nombre_producto,
      precio_venta,
      estrellas, // Ya disponible a través de props
      base64_imagen_card, // Ya disponible a través de props
      sku: "SKU123",
      tipo: "Tipo de cerveza",
      grado_alcoholico: "5%",
      amargor_ibu: "30 IBU",
      precio_compra: 500, // Este podría ser un valor calculado o obtenido de otra fuente
      is_recomendado: false,
      casa_cervecera: "Casa Cervecera Ejemplo",
      base64_imagen_detalle: base64_imagen_card, // Si es el mismo que el de la tarjeta
      is_promo: false,
      volumen_cc: 500,
      detalle: "Detalle del producto",
      stock: 10, // Este valor debería venir de tu inventario o base de datos
      precio_descuento: 800, // Este podría ser un valor calculado
      cantidad: cantidad,
    };

    console.info(producto);

    dispatch(agregarAlCarrito(producto));

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container">
      {showAlert && <Alert variant="success">Producto agregado al carrito</Alert>}

      <div className="row mb-3">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">Home</Link> /
          <Link to="/cervezas" className="text-decoration-underline">Cervezas</Link> / <Link to="" className="text-decoration-underline">{cerveza.nombre_producto}</Link>
        </div>
        <div className="col-6"></div>
      </div>

      <div className="row">
        <div className="col-6">
          <img src={`http://atari.mta.cl:35000/${cerveza.base64_imagen_card}`} alt="Imagen de la cerveza" className="img-fluid" style={{ height: "100%", width: "100%" }} />
        </div>

        <div className="col-6">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className={'cerveza-nombre'}>{cerveza.nombre_producto}</h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="rating">

                <div>
                  <div className={'cerveza-secundario'}>
                    <span>{cerveza.tipo} | {cerveza.volumen_cc}</span>
                  </div>

                  <div>
                    <span>{renderEstrellas()}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="cerveza-precio col-5">
              ${cerveza.precio_venta}
            </div>
            <div className="cerveza-precio col-7">
              <Card.Footer className={'cerveza-card-footer d-flex flex-row justify-content-between'}>
                <Form.Control
                  type="number"
                  id={`cantidad-${id}`}
                  placeholder="1"
                  defaultValue={1}
                  style={{ marginLeft: '0.5em', width: '6em' }}
                />
                <span className={'comprar-text'}>comprar</span>
                <button className={'cerveza-card-footer-carrito me-2'} onClick={handleAgregarAlCarrito} >
                  <img src={carritoBtn} />
                </button>
              </Card.Footer>
            </div>

          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p>Descripción del Producto: {cerveza.detalle}</p>
            </div>
          </div>
          <div className="row mb-3">


            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                  <div style={{ width: 48, height: 48, position: 'relative' }}>
                    <div style={{ width: 48, height: 14.52, left: 0, top: 0, position: 'absolute', background: '#E1E6FC' }}></div>
                    <div style={{ width: 30.52, height: 13.04, left: 8.74, top: 17.48, position: 'absolute', background: '#3555E8' }}></div>
                    <div style={{ width: 14.52, height: 14.52, left: 16.74, top: 33.48, position: 'absolute', background: '#3555E8' }}></div>
                  </div>
                  <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#343A40', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Alcohol Medio</div>
                    <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>5,5% ABV</div>
                  </div>
                </div>
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                  <div style={{ width: 48, height: 48, position: 'relative' }}>
                    <div style={{ width: 48, height: 14.52, left: 0, top: 0, position: 'absolute', background: '#E1E6FC' }}></div>
                    <div style={{ width: 30.52, height: 13.04, left: 8.74, top: 17.48, position: 'absolute', background: '#E1E6FC' }}></div>
                    <div style={{ width: 14.52, height: 14.52, left: 16.74, top: 33.48, position: 'absolute', background: '#3555E8' }}></div>
                  </div>
                  <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#343A40', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Amargor Bajo</div>
                    <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>20 IBU</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: '100%', paddingLeft: 8, paddingRight: 8, paddingTop: 16, paddingBottom: 16, background: '#F8F9F9', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
              <div style={{ width: 28, height: 28, position: 'relative' }}>
                <div style={{ width: 16.33, height: 8.17, left: 17.50, top: 5.83, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px #343A40 solid' }}></div>
              </div>
              <div style={{ flex: '1 1 0', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <div>
                  <span style={{ color: '#343A40', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Nombre Apellido<br /></span>
                  <span style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Fecha</span>
                </div>
                <div style={{ width: 118.87, height: 24, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                </div>
                <div style={{ alignSelf: 'stretch', color: '#343A40', fontSize: 16, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta lorem eu mauris scelerisque pharetra. Morbi quis pretium enim. </div>
              </div>
              <div style={{ width: 28, height: 28, position: 'relative' }}>
                <div style={{ width: 16.33, height: 8.17, left: 10.50, top: 22.17, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px #343A40 solid' }}></div>
              </div>
            </div>
            <Link to="/">
              <div className={'row'}>
                <div className={'col-md-5'}>
                  <div style={{ width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 8, border: '2px #3555E8 solid', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <div style={{ width: 24, height: 24, position: 'relative' }}>
                      <div style={{ width: 18, height: 14, left: 3, top: 5, position: 'absolute', border: '2px #3555E8 solid' }}></div>
                    </div>
                    <div style={{ textAlign: 'center', color: '#3555E8', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Volver a la tienda</div>
                  </div>
                </div>
                <div className={'col-md-7'}></div>
              </div>
            </Link>
          </div>
        </div>
        <TePodriaComponent />
      </div>
    </div>
  );
}

export default CervezaDetalle;
