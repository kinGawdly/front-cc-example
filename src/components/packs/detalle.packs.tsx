import { Link, useParams  } from 'react-router-dom';
import { Productos } from '../productos/Productos'
import { packs } from '../../_facke_data/packs'


export function PacksDetalle() {
  const { id } = useParams();
  const pack = packs.find(pack => pack.id === id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">Home</Link> / 
          <Link to="/packs" className="text-decoration-underline">Packs</Link> / <span>Pack</span>
        </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">Detalle de Packs</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="https://picsum.photos/100/100" alt="Imagen de la cerveza" className="img-fluid" style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="col-6">
            <div className="row mb-3">
              <div className="col-12">
                {pack && <h2>{pack["nombre"]}</h2>}
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
              {pack && <p>Precio: ${`${pack.precio_venta}`}</p>}
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

export default PacksDetalle;
