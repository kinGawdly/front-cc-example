// src\components\producto\producto.compoment.tsx
import { useState } from 'react';

import { Alert, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './producto.compoment.css';
import carritoBtn from '/productos/shopping-cart.png';
import Estrella from '/productos/star.png';

import { agregarAlCarrito } from '../../actions/carritoActions';
import ProductoCarritoDto from '../../dtos/producto.carrito.dto';
import DetalleCerveza from '../../interfaces/producto/cerveza.detalle';


export interface ProductoProps {
  producto: DetalleCerveza;
}

export const ProductoCard = (props: ProductoProps) => {
  const { id, nombre_producto, volumen_cc, precio_venta, precio_descuento, estrellas, base64_imagen_card } = props.producto;
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const renderEstrellas = () => {
    const estrellasLlenas = Math.floor(estrellas || 0);
    const estrellaMedia = estrellas || 0 - estrellasLlenas > 0.5;

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
    <>
      <div className="w-[232px] px-3 pt-3 bg-[#E1E6FC] hover:bg-[#C0CAF8] rounded-tr-lg rounded-tl-lg">
        {showAlert && <Alert variant="success">Producto agregado al carrito</Alert>}
        <img
          className=""
          src={base64_imagen_card ? `http://atari.mta.cl:35000/${base64_imagen_card}` : '/cerveza_default.png'}
        />
        <div className='flex flex-col justify-center py-3'>
          <div>
            <Link to={`/productos/${id}`}>
              <h3 className='font-bold text-xl truncate'> {/* Reduce el margen inferior del título */}
                {nombre_producto}
              </h3>
            </Link>
          </div>
          <div className='italic mb-2'> {/* Ajusta el margen superior del volumen */}
            {volumen_cc} cc
          </div>
          <div className={'mt-3 producto-card-text'} style={{ paddingTop: 0 }}>
            <span className='text-xl'>$ {precio_venta}</span> <span className='line-through text-gray-400'>${precio_descuento}</span>
          </div>

          <div className='flex'>
            {renderEstrellas()}
          </div>
        </div>
      </div>
      <div className='flex justify-between bg-[#3555E8] p-2 rounded-br-lg rounded-bl-lg items-center'>
        <Form.Control
          className='text-bold text-[#20338B] w-24'
          type="number"
          id={`cantidad-${id}`}
          placeholder="1"
          defaultValue={1}
        />
        <button className="size-8 bg-white rounded flex items-center justify-center" onClick={handleAgregarAlCarrito} >
          <img src={carritoBtn} />
        </button>
      </div>
    </>

  );
};

export default ProductoCard;
