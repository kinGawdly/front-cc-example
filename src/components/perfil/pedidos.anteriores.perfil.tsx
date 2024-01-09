import { Link } from 'react-router-dom';


export function AnterioresPerfil() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/ <span> Carrito</span>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="fw-bold">Pedidos anteriores</h1>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="00/00/00" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="123456789" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$ 1.000" />
                            </div>
                        </div>
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="00/00/00" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="123456789" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$ 1.000" />
                            </div>
                        </div>
                        <div className="alert alert-secondary">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="00/00/00" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="123456789" />
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$ 1.000" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-end">
                            <Link to="/carrito" className="btn btn-primary">Repetir pedido</Link>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default AnterioresPerfil;
