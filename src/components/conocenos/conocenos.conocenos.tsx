import { Link } from 'react-router-dom';

export function ConocenosConocenos() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/
                    <span>Conócenos</span>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <Link to="/quienes" className="text-decoration-underline">
                                <img src="https://picsum.photos/200/200?grayscale" alt="Imagen 1" />
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/valdivia" className="text-decoration-underline">
                                <img src="https://picsum.photos/200/200?grayscale" alt="Imagen 2" />
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/casas" className="text-decoration-underline">
                                <img src="https://picsum.photos/200/200?grayscale" alt="Imagen 3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConocenosConocenos;
