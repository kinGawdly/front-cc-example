import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PerfilCrear() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Link to="/" className="text-decoration-underline">Home</Link> / <span>Crear cuenta</span>
                    <img className="img-fluid rounded-circle" src="https://picsum.photos/30?grayscale" alt="Imagen" style={{ width: '100px', height: '100px', display: 'block' }} />
                    <Link to="/datos">
                        <Button className="mt-2 btn-block" variant="secondary">Mis datos</Button>
                    </Link>
                    <Link to="/anteriores">
                        <Button className="mt-2 btn-block" variant="secondary">Pedidos anteriores</Button>
                    </Link>
                </div>
                <div className="col-10">
                    <div className="alert alert-secondary" role="alert">
                        <h3>Datos personales</h3>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control placeholder="Nombre" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Primer apellido" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Segundo apellido" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Control placeholder="RUT/Pasaporte" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Número de contacto" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Control type="email" placeholder="Correo electrónico" />
                                </Col>
                            </Row>
                        </Form>

                        <h3>Dirección</h3>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control placeholder="Nombre" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Primer apellido" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Segundo apellido" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Control placeholder="RUT/Pasaporte" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Número de contacto" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Control type="email" placeholder="Correo electrónico" />
                                </Col>
                                <Col>

                                    <Button variant="primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                        ¡Crear cuenta!
                                    </Button>

                                </Col>

                            </Row>
                        </Form>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex={parseInt("-1")} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal para actualizar datos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control placeholder="Nombre" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Primer apellido" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Segundo apellido" />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control placeholder="RUT/Pasaporte" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Número de contacto" />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control type="email" placeholder="Correo electrónico" />
                                    </Col>
                                </Row>
                            </Form>
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

export default PerfilCrear;
