import { useState } from 'react';

import { Alert, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';


import { agregarAlCarrito } from '../../actions/carritoActions';
import ProductoCarritoDto from '../../dtos/producto.carrito.dto';
import DetalleCerveza from '../../interfaces/producto/cerveza.detalle';


export interface ProductoProps {
  producto: DetalleCerveza;
}

export const ProductoCard = (props: ProductoProps) => {
  const { id, nombre_producto, precio_venta, estrellas, base64_imagen_card, sku } = props.producto;
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const renderEstrellas = () => {
    const estrellasLlenas = Math.floor(estrellas || 0);
    const estrellaMedia = estrellas || 0 - estrellasLlenas > 0.5;

    const estrellasLlenasArray = Array.from({ length: estrellasLlenas }, (_, index) => (
      <i key={index} className="bi bi-star-fill"></i>
    ));

    const estrellaMediaComponent = estrellaMedia ? (
      <i key="media" className="bi bi-star-half"></i>
    ) : null;

    const estrellasVaciasArray = Array.from(
      { length: Math.max(0, 5 - estrellasLlenas - (estrellaMedia ? 1 : 0)) },
      (_, index) => <i key={index + estrellasLlenas} className="bi bi-star"></i>
    );

    return [...estrellasLlenasArray, estrellaMediaComponent, ...estrellasVaciasArray];
  };

  const handleAgregarAlCarrito = () => {
    const cantidadInput = document.querySelector(`#cantidad-${id}`) as HTMLInputElement;
    const cantidad = cantidadInput ? parseInt(cantidadInput.value) : 1;

    const producto: ProductoCarritoDto = {
      id,
      nombre_producto,
      precio_venta,
      estrellas,
      base64_imagen_card,
      sku,
      tipo: "Tipo de cerveza",
      grado_alcoholico: "0",
      amargor_ibu: "0",
      precio_compra: 0,
      is_recomendado: false,
      casa_cervecera: "",
      base64_imagen_detalle: base64_imagen_card,
      is_promo: false,
      volumen_cc: 500,
      detalle: "Detalle del producto",
      stock: 10,
      precio_descuento: 800,
      cantidad: cantidad,
    };

    console.info(producto);

    dispatch(agregarAlCarrito(producto));

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <Card style={{ width: '14em', borderRadius: '8px' }}>
        {showAlert && <Alert variant="success">Producto agregado al carrito</Alert>}
        <Card.Img
          variant="top"
          src={base64_imagen_card ? `http://atari.mta.cl:35000/${base64_imagen_card}` : '/cerveza_default.png'}
          style={{ border: '1em solid #E1E6FC' }}
        />
        <div className={'carBody'} style={{ backgroundColor: '#E1E6FC', borderBottomLeftRadius: '0 important!', borderBottomRightRadius: '0' }}>
          <Link to={`/productos/${id}`} className="col-4">
            <Card.Title style={{ fontWeight: 'bold' }}>
              <Link to={`/productos/${id}`} className="col-4">
                {nombre_producto}
              </Link>
            </Card.Title>
          </Link>
          <Card.Text>
            <span>{renderEstrellas()}</span><span className='ms-3'>$ {precio_venta}</span>
          </Card.Text>
        </div>
        <Card.Footer style={{ backgroundColor: '#f0f0f0', height: '4em', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Form.Control
            type="number"
            id={`cantidad-${id}`}
            placeholder="1"
            defaultValue={1}
            style={{ marginLeft: '0.5em', width: '3em' }}
          />
          <button onClick={handleAgregarAlCarrito} style={{ border: 'none', background: 'none' }}>
            <i className="bi bi-cart4"></i>
          </button>
        </Card.Footer>
      </Card>

      <div style={{ width: '100%', height: '100%', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ width: 232, height: 384, padding: 16, background: '#E1E6FC', borderTopLeftRadius: 8, borderTopRightRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
          <div style={{ alignSelf: 'stretch', height: 352, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
            <img style={{ alignSelf: 'stretch', height: 200, borderRadius: 4 }} src="https://via.placeholder.com/200x200" />
            <div style={{ alignSelf: 'stretch', height: 136, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', height: 68, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#343A40', fontSize: 20, fontWeight: '700', wordWrap: 'break-word' }}>Bundor Ninfa</div>
                <div style={{ alignSelf: 'stretch', color: '#343A40', fontSize: 16, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>330 cc</div>
              </div>
              <div style={{ alignSelf: 'stretch', height: 56, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                  <div style={{ color: '#343A40', fontSize: 20, fontWeight: '400', wordWrap: 'break-word' }}>$ 4.100</div>
                  <div style={{ flex: '1 1 0', color: '#BABDBF', fontSize: 16, fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word' }}>$ 4.600</div>
                </div>
                <div style={{ width: 118.87, height: 24, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                  <div style={{ width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 232, padding: 8, background: '#3555E8', borderTopLeftRadius: 8, borderTopRightRadius: 8, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ width: 95, height: 32, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#F8F9F9', borderRadius: 4, justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
            <div style={{ flex: '1 1 0', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>1</div>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
              <div style={{ width: 12, height: 12, position: 'relative' }}>
                <div style={{ width: 7, height: 3.50, left: 9.50, top: 7.50, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '2px #20338B solid' }}></div>
              </div>
              <div style={{ width: 12, height: 12, position: 'relative' }}>
                <div style={{ width: 7, height: 3.50, left: 2.50, top: 4.50, position: 'absolute', border: '2px #20338B solid' }}></div>
              </div>
            </div>
          </div>
          <div style={{ height: 32, justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex' }}>
            <div style={{ padding: 4, background: 'white', borderRadius: 4, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
              <div style={{ width: 24, height: 24, position: 'relative', background: 'white' }}>
                <div style={{ width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2px #20338B solid' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProductoCard;
