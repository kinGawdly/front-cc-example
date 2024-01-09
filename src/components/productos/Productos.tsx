import { Link } from 'react-router-dom';

import { cervezas as productos } from '../../_facke_data/cervezas'
import Producto from '../producto/Producto';

export function Productos() {
    const productosPorSlice = 4;
    const slicedCervezas = [];

    for (let i = 0; i < productos.length; i += productosPorSlice) {
        slicedCervezas.push(productos.slice(i, i + productosPorSlice));
    }

    return (
        <section className="promotions mt-5">
            <h2 className='mb-3'>Productos</h2>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slicedCervezas.map((slice, sliceIdx) => (
                        <div className={`carousel-item ${sliceIdx === 0 ? 'active' : ''}`} key={sliceIdx}>
                            <div className="container">
                                <div className="row">
                                    {slice.map((cerveza, idx) => (
                                        <div className="col-md-3 mb-3" key={idx}>
                                            <Link to={`/cerveza/${cerveza.id}`}>
                                                <Producto producto={cerveza} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Productos;
