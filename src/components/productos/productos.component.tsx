// componentes/productos.component.tsx

import { Cerveza } from '../../interfaces/producto/cerveza';
import ProductoCard from '../producto/producto.compoment';
import FlechaAdelanteImg from '/productos/lista-adelante.png';
import FlechaAtrasImg from '/productos/lista-atras.png';

import './producto_lista.component.css';


interface ProductosComponentProps {
  listaProductos: Cerveza[];
  titulo: string;
  claseProp: string;
}

export function Productos({ listaProductos, titulo, claseProp }: ProductosComponentProps) {
  const productosPorSlice = 4;
  const slicedProductos = [];

  for (let i = 0; i < listaProductos.length; i += productosPorSlice) {
    slicedProductos.push(listaProductos.slice(i, i + productosPorSlice));
  }

  return (
    <>
      <div className="container-fluid mt-[120px]">
        <section className='flex flex-col gap-10'>
          <div className='text-center text-3xl font-bold text-[#20338B] font-montserrat-alternates'>
            <div>{titulo}</div>
          </div>

          <div id={`carusel-${claseProp}`} className="carousel slide" data-bs-ride="carousel">

            <button className="carousel-control-prev col-md-2" type="button" data-bs-target={`#carusel-${claseProp}`} data-bs-slide="prev">
              <img src={FlechaAtrasImg} alt="atrás" />
            </button>

            <div className="carousel-inner">
              {slicedProductos.map((slice, sliceIdx) => (
                <div className={`carousel-item ${sliceIdx === 0 ? 'active' : ''}`} key={sliceIdx}>
                  <div className="container">
                    <div className='flex justify-center gap-8'>
                      {slice.map((producto: Cerveza) => (
                        <div className={'col-md-2 mb-3'} key={producto.id}>
                          <ProductoCard producto={producto} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div >
            <div className="carousel-indicators">
              <button type="button" data-bs-target={`#carusel-${claseProp}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target={`#carusel-${claseProp}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target={`#carusel-${claseProp}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <button className="carousel-control-next" type="button" data-bs-target={`#carusel-${claseProp}`} data-bs-slide="next">
              <img src={FlechaAdelanteImg} alt="adelante" />
            </button>
          </div >
        </section >
      </div >
    </>
  );
}

export default Productos;
