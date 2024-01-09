import { Link } from 'react-router-dom';

import { SuscripcionesFiltro } from './filtro.suscripciones'

// datos de prueba
import { suscripciones } from '../../_facke_data/suscripciones'
import Producto from '../producto/Producto';

export function SuscripcionesLista() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Suscripciones</span>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-bold">Suscripciones</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <SuscripcionesFiltro />
                </div>
                <div className="col-6">
                    <div className="row">
                        {suscripciones.map((suscripcion, idx) => (
                            <div key={idx} className="col-4 mb-3">
                                <Link to={`/suscripcion/${suscripcion.id}`}>
                                    <Producto producto={suscripcion} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuscripcionesLista;
