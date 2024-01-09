import { Link } from 'react-router-dom';

// datos de prueba
import CarritoPasosComponent from './pasos/pasos.carrito.component';
import CarritoResumen from './resumen.carrito';
import Productos from '../productos/Productos';

export function CarritoEnvio() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Carrito</span>
        </div>
        <div className="col-6"></div>
      </div>

      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-8">
              <h1 className="fw-bold">Tu Carrito</h1>
            </div>
            <div className="col-4">
              <CarritoPasosComponent />
            </div>
          </div>
          <div className="row">
            <h1>Datos de envío</h1><hr />
            <p><strong>Contacto:</strong> correo@fake.dev</p>
            <p><strong>Enviar a:</strong> Nombre Apellido</p>


            <div className="alert alert-secondary">
              <div className="d-flex justify-content-between align-items-center">
                <span><strong>Método de pago 2</strong></span>

                <div className="form-check">

                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label htmlFor="flexRadioDefault1">$ 1.000</label>
                </div>
              </div>
            </div>
            <div className="alert alert-secondary">
              <div className="d-flex justify-content-between align-items-center">
                <span><strong>Método de pago 2</strong></span>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label htmlFor="flexRadioDefault2">$ 2.000</label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Link to="/contacto">Modificar información de contacto</Link>
            </div>
            <div className="col-6 text-end">
              <Link to="/forma-pago" className="btn btn-primary">Forma de pago</Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <CarritoResumen />
        </div>
      </div>

      <div className='"row'>
        <Productos />
      </div>
    </div>
  );
}

export default CarritoEnvio;
