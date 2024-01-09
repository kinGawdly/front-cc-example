import { Link } from 'react-router-dom';

import CarritoResumen from './resumen.carrito';
import ContactoForm from './contacto_form';
import OlvidarComponent from '../productos/lista-olvidar.component';

export function CarritoContacto() {

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
                            <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#3555E8', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>1</div>
                            <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#2840AE', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>2</div>
                            <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#E9ECEF', color: '#BABDBF', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>3</div>
                            <div className="rounded-circle col-3 me-3" style={{ backgroundColor: '#E9ECEF', color: '#BABDBF', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px' }}>4</div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <ContactoForm />
                    </div>
                </div>

                <div className="col-4">
                    <CarritoResumen />
                </div>
            </div>

            <div className='"row'>
                <OlvidarComponent />
            </div>
        </div>
    );
}

export default CarritoContacto;
