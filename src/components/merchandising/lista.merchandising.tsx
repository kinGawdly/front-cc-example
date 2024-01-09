import { Link } from 'react-router-dom';

import { MerchandisingsFiltro } from './filtro.merchandising';

// datos de prueba
import { merchandisings } from '../../_facke_data/merchandising';
import Producto from '../producto/Producto';

export function MerchandisingLista() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Merchandisings</span>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-bold">Merchandisings</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <MerchandisingsFiltro />
                </div>
                <div className="col-6">
                    <div className="row">
                        {merchandisings.map((merchandising, idx) => (
                            <div key={idx} className="col-4 mb-3">
                                <Link to={`/merchandising/${merchandising.id}`}>
                                    <Producto producto={merchandising} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchandisingLista;
