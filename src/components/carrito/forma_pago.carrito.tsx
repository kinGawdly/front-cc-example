import { Link } from 'react-router-dom';

// datos de prueba
import CarritoPasosComponent from './pasos/pasos.carrito.component';
import CarritoResumen from './resumen.carrito';
import Productos from '../productos/Productos';

export function CarritoFormaPago() {

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
                        <h1>Forma Pago</h1><hr />
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <span><strong>Targeta débito</strong></span>

                                <div className="form-check">

                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <span><strong>Targeta crébito</strong></span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <h1>Dirección de facturación</h1><hr />
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <span><strong>Misma dirección de envío</strong></span>

                                <div className="form-check">

                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <span><strong>Usar una dirección distinta</strong></span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <Link to="/envio">Volver al envío</Link>
                        </div>
                        <div className="col-6 text-end">
                            <Link to="/pagar" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ir a pagar</Link>
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


            <div className="modal fade" id="exampleModal" tabIndex={parseInt("-1")} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Muchas gracias por pagar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Cuerpo de la respuesta de pago.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CarritoFormaPago;
