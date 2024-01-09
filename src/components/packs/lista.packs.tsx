import { Link } from 'react-router-dom';

import { FiltroPacks } from './filtro.packs'

// datos de prueba
import { packs as lista_packs } from '../../_facke_data/packs'
import Producto from '../producto/Producto';

export function PacksLista() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Packs</span>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-bold">Packs</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <FiltroPacks />
                </div>
                <div className="col-6">
                    <div className="row">
                        {lista_packs.map((pack, idx) => (
                            <div key={idx} className="col-4 mb-3">
                                <Link to={`/pack/${pack.id}`}>
                                    <Producto producto={pack} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PacksLista;
