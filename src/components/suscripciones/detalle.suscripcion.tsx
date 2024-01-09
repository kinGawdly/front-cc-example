import { Link, useParams  } from 'react-router-dom';
import { Productos } from '../productos/Productos';
import { suscripciones } from '../../_facke_data/suscripciones';


export function SuscripcionDetalle() {
  const { id } = useParams();
  const suscripcion = suscripciones.find(suscripcion => suscripcion.id === id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">Home</Link> / 
          <Link to="/suscripciones" className="text-decoration-underline">Suscripciones</Link> / <span>Suscripcion</span>
        </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">Detalle de Suscripciones</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="https://picsum.photos/100/100" alt="Imagen de la cerveza" className="img-fluid" style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="col-6">
            <div className="row mb-3">
              <div className="col-12">
                {suscripcion && <h2>{suscripcion["nombre"]}</h2>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              {suscripcion && <p>Precio: ${`${suscripcion.precio_venta}`}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <p>Descripción del Producto</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <ul>
                <li>Característica 1</li>
                <li>Característica 2</li>
                <li>Característica 3</li>
              </ul>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <h3>Opiniones</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='"row'>
        <Productos />        
      </div>
    </div>
  );
}

export default SuscripcionDetalle;
