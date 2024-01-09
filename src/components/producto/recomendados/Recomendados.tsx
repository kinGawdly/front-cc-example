import './Recomendatos.css'
import Producto from '../Producto';
import { Link } from 'react-router-dom';

// datos de prueba
import { cervezas as recomendados } from '../../../_facke_data/cervezas'

export function Recomendados() {
  return (
    <div className="row">
      {recomendados.map((cerveza, idx) => (
        <div className="col mb-3">
          <Link to={`/cerveza/${cerveza.id}`} key={idx} className="col-4">
            <Producto producto={cerveza} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recomendados;
