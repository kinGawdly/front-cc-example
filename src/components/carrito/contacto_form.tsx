// src\components\carrito\contacto_form.tsx

import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ContactoFormInterface } from '../../interfaces/formularios/contacto.formulario';

import VerCarrito from '/productos/arrow-left.png';
import IrEnvio from '/productos/arrow-right.png';

import { Link } from 'react-router-dom';
import { clean, validate } from 'rut.js';

function ContactoForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ContactoFormInterface>();

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: '100%', height: '100%', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', paddingBottom: 16, borderBottom: '2px #20338B solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <div style={{ color: '#20338B', fontSize: 36, fontFamily: 'Montserrat Alternates', fontWeight: '700', wordWrap: 'break-word' }}>Datos de contacto</div>
            <div style={{ height: 40, justifyContent: 'flex-end', alignItems: 'center', gap: 24, display: 'flex' }}>
              <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>¿Ya tienes una cuenta?</div>
              <div style={{ width: 133, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 8, border: '2px #3555E8 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <div style={{ textAlign: 'center', color: '#3555E8', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Inicia sesión</div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'stretch', height: 464, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 24, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Correo</div>
                  </div>
                  {/* email */}
                  <Form.Control type="email" placeholder="Ingrese su email" {...register('email', { required: 'El email es requerido', maxLength: { value: 50, message: 'El email no debe exceder los 50 caracteres' } })} />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email.message?.toString()}</p>}
                </div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                {/* atento */}
                <div style={{ alignSelf: 'stretch', padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                  <Form.Check type="checkbox" {...register('esAtento')} />
                  <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Quiero recibir novedades y promos</div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Nombre</div>
                  </div>
                  {/* nombre */}
                  <Form.Control type="text" placeholder="Ingrese su nombre" {...register('nombre', { maxLength: { value: 50, message: "El nombre no puede exceder los 50 caracteres" } })} />
                  {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre.message?.toString()}</p>}
                </div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Apellido</div>
                  </div>
                  {/* apellido"Paterno" */}
                  <Form.Control type="text" placeholder="Ingrese su apellido" {...register('apellidoPaterno', { maxLength: 50 })} />
                  {errors.apellidoPaterno && <p style={{ color: 'red' }}>El apellido no puede exceder los 50 caracteres</p>}
                </div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Rut</div>
                  </div>
                  {/* rut */}
                  <Form.Control type="text" placeholder="Ingrese su RUT" {...register('rut', { maxLength: 12, validate: validateRut })} />
                  {errors.rut && errors.rut.message && <p style={{ color: 'red' }}>{errors.rut.message?.toString()}</p>}
                </div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Teléfono</div>
                  </div>
                  {/* teléfono */}
                  <Form.Control type="tel" placeholder="Ingrese su teléfono" {...register('telefono', { maxLength: 50 })} />
                  {errors.telefono && <p style={{ color: 'red' }}>El teléfono no puede exceder los 50 caracteres</p>}
                </div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Región</div>
                {/* teléfono */}
                <Form.Select defaultValue="" {...register('region')}>
                  <option value="">Seleccione una región</option>
                  <option value="1">Región Metropolitana de Santiago</option>
                </Form.Select>
                {errors.region && <p style={{ color: 'red' }}>Por favor seleccione una región</p>}


              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Comuna</div>
                {/* comuna */}
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
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Dirección</div>
                </div>
                {/* calle número */}
                <Form.Control type="text" placeholder="Calle número" {...register('direccion', { maxLength: 255 })} />
                {errors.direccion && <p style={{ color: 'red' }}>La dirección no puede exceder los 255 caracteres</p>}
              </div>
            </div>
            <div style={{ height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Departamento o casa</div>
                  <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                    <div style={{ textAlign: 'right', color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Opcional</div>
                  </div>
                </div>
                {/* Departamento o Casa */}
                <Form.Control type="text" placeholder="Departamento o Casa" {...register('departamentoCasa', { maxLength: 50 })} />
                {errors.departamentoCasa && <p style={{ color: 'red' }}>El campo no puede exceder los 50 caracteres</p>}
              </div>
            </div>
          </div>

          <div style={{ alignSelf: 'stretch', paddingTop: 24, borderTop: '2px #20338B solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
            <Link to="/carrito">
              <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <div style={{ width: 24, height: 24, position: 'relative' }}>
                  <img src={VerCarrito} />
                </div>
                <div style={{ textAlign: 'center', color: '#343A40', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Ver carrito</div>
              </div>
            </Link>
            <Link to="/envio">
              <div style={{ width: 140, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#3555E8', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Ir a envío</div>
                <img src={IrEnvio} />
              </div>
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ContactoForm;
