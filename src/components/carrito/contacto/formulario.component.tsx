import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useState, useEffect } from 'react';

import { validate, clean } from 'rut.js';
import { ContactoFormInterface } from '../../../interfaces/formularios/contacto.formulario';

export function ContactoForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<ContactoFormInterface>();
    const password = watch('password');
    const confirmPassword = watch('confirmarPassword');
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        if (password && confirmPassword && password !== confirmPassword) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }, [password, confirmPassword]);

    const onSubmit = (data: ContactoFormInterface) => {
        // TODO:Lógica de envío del formulario
        console.log(data);
    };

    const validateRut = (value: string) => {
        const cleanedRut = clean(value);
        if (!validate(cleanedRut)) {
            return 'RUT inválido';
        }
    };

    return (
        <>
            <Row className="d-flex align-items-end">
                <Col xs={8}>
                    <h3>Información de contacto</h3>
                </Col>
                <Col xs={2} className="d-flex align-items-center">
                    <p style={{ marginBottom: '0' }}>¿Ya tienes cuenta?</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                    <Button className='ms-3 mb-1' variant="primary btn btn-sm">Iniciar sesión</Button>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese su username" {...register('username', { required: 'Este campo es requerido', maxLength: 100 })} />
                            {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Ingrese su contraseña" {...register('password', { required: 'Este campo es requerido', maxLength: 100 })} />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Confirme su contraseña" {...register('confirmarPassword', { required: 'Este campo es requerido', maxLength: 100 })} />
                            {errors.confirmarPassword && <p style={{ color: 'red' }}>{errors.confirmarPassword.message}</p>}
                            {passwordError && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Ingrese su email" {...register('email', { required: 'El email es requerido', maxLength: { value: 50, message: 'El email no debe exceder los 50 caracteres' } })} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    <Form.Check type="checkbox" label="Quiero estar atentx a novedades y promos" {...register('esAtento')} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese su nombre" {...register('nombre', { maxLength: { value: 50, message: "El nombre no puede exceder los 50 caracteres" } })} />
                            {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre.message}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese sus apellidos" {...register('apellidoPaterno', { maxLength: 50 })} />
                            {errors.apellidoPaterno && <p style={{ color: 'red' }}>El apellido paterno no puede exceder los 50 caracteres</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese su RUT" {...register('rut', { maxLength: 12, validate: validateRut })} />
                            {errors.rut && errors.rut.message && <p style={{ color: 'red' }}>{errors.rut.message}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="tel" placeholder="Ingrese su teléfono" {...register('telefono', { maxLength: 50 })} />
                            {errors.telefono && <p style={{ color: 'red' }}>El teléfono no puede exceder los 50 caracteres</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Select defaultValue="" {...register('region')}>
                                <option value="">Seleccione una región</option>
                                <option value="1">Región Metropolitana de Santiago</option>
                            </Form.Select>
                            {errors.region && <p style={{ color: 'red' }}>Por favor seleccione una región</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Select defaultValue="" {...register('comuna')}>
                                <option value="">Seleccione una comuna</option>
                                <option value="1">Cerrillos</option>
                                <option value="2">Cerro Navia</option>
                                <option value="3">Conchalí</option>
                                <option value="4">El Bosque</option>
                                <option value="5">Estación Central</option>
                                <option value="6">Huechuraba</option>
                                <option value="7">Independencia</option>
                                <option value="8">La Cisterna</option>
                                <option value="9">La Florida</option>
                                <option value="10">La Granja</option>
                                <option value="11">La Pintana</option>
                                <option value="12">La Reina</option>
                                <option value="13">Las Condes</option>
                                <option value="14">Lo Barnechea</option>
                                <option value="15">Lo Espejo</option>
                                <option value="16">Lo Prado</option>
                                <option value="17">Macul</option>
                                <option value="18">Maipú</option>
                                <option value="19">Ñuñoa</option>
                                <option value="20">Pedro Aguirre Cerda</option>
                                <option value="21">Peñalolén</option>
                                <option value="22">Providencia</option>
                                <option value="23">Pudahuel</option>
                                <option value="24">Quilicura</option>
                                <option value="25">Quinta Normal</option>
                                <option value="26">Recoleta</option>
                                <option value="27">Renca</option>
                                <option value="28">San Joaquín</option>
                                <option value="29">San Miguel</option>
                                <option value="30">San Ramón</option>
                                <option value="31">Santiago</option>
                                <option value="32">Vitacura</option>
                            </Form.Select>

                            {errors.comuna && <p style={{ color: 'red' }}>Por favor seleccione una comuna</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese su dirección" {...register('direccion', { maxLength: 255 })} />
                            {errors.direccion && <p style={{ color: 'red' }}>La dirección no puede exceder los 255 caracteres</p>}
                        </Form.Group>
                    </Col>
                    <Col xs={5}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Número" {...register('numero', { maxLength: 10 })} />
                            {errors.numero && <p style={{ color: 'red' }}>El número no puede exceder los 10 caracteres</p>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-between">
                    <Col xs={5}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Departamento o Casa" {...register('departamentoCasa', { maxLength: 50 })} />
                            {errors.departamentoCasa && <p style={{ color: 'red' }}>El campo no puede exceder los 50 caracteres</p>}
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="d-flex align-items-center justify-content-end">
                        <Button type="submit" className="btn btn-link">Regístrate 😊</Button>
                    </Col>
                </Row>
            </Form>

        </>
    );
}

export default ContactoForm;
