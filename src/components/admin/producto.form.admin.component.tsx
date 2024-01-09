// src\components\admin\producto.form.admin.component.tsx
import React from 'react';
import { Modal } from 'react-bootstrap';
import { CreateProductoDto, UpdateProductoDto } from './dtos.admin';


interface FormularioProductoProps {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedProducto: CreateProductoDto | UpdateProductoDto;
  setSelectedProducto: React.Dispatch<React.SetStateAction<CreateProductoDto | UpdateProductoDto>>;
  handleCrearProducto: () => void;
  handleActualizarProducto: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChangeDetalle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormularioProducto({
  showModal,
  handleCloseModal,
  selectedProducto,
  setSelectedProducto,
  handleCrearProducto,
  handleActualizarProducto,
  handleFileChange,
  handleFileChangeDetalle
}: FormularioProductoProps) {

  const handleCloseAndSave = () => {
    if (selectedProducto.id) {
      handleActualizarProducto();
    } else {
      handleCrearProducto();
    }
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-xl">
      <Modal.Body>
        <form>
          <div style={{ width: '100%', height: '100%', padding: 24, background: '#E1E6FC', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
            <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
              <div style={{ width: 24, height: 24, position: 'relative' }}>
                <div style={{ width: 12, height: 12, left: 6, top: 6, position: 'absolute', border: '2px #343A40 solid' }}></div>
              </div>
            </div>
            <div style={{ color: '#20338B', fontSize: 20, fontFamily: 'Montserrat Alternates', fontWeight: '700', wordWrap: 'break-word' }}>Información del Producto</div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Casa Cervecera</div>
                <select
                  className="form-select"
                  id="casa"
                  value={1}
                  onChange={(e) => setSelectedProducto({ ...selectedProducto, casa: e.target.value })}
                >
                  <option value="">La casa de Chile</option>
                </select>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Tipo de cerveza</div>
                <select
                  className="form-select"
                  id="tipo"
                  value={selectedProducto.tipo || ''}
                  onChange={(e) => setSelectedProducto({ ...selectedProducto, tipo: e.target.value })}
                >
                  <option value="">Seleccionar Tipo</option>
                  <option value="Lager">Lager</option>
                  {/* <option value="Pilsner">Pilsner</option>
                                    <option value="Ale">Ale</option>
                                    <option value="Stout">Stout</option>
                                    <option value="Porter">Porter</option>
                                    <option value="Bock">Bock</option>
                                    <option value="Lambic">Lambic</option>
                                    <option value="Hefeweizen">Hefeweizen</option> */}
                </select>
              </div>
            </div>

            {/* TODO: EXPLICAR SI DEJAR O QUITAR */}
            {/* <div style={{ alignSelf: 'stretch', height: 56, paddingTop: 8, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, background: '#C0CAF8', borderRadius: 8, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 24, height: 24, background: 'white', border: '1px #3555E8 solid' }} />
                                    <div style={{ color: '#343A40', fontSize: 16,  fontWeight: '400', wordWrap: 'break-word' }}>Ingresar nueva casa cervecera</div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                        <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#BABDBF', fontSize: 16,  fontWeight: '700', wordWrap: 'break-word' }}>Nueva casa cervecera</div>
                                    </div>
                                    <div style={{ alignSelf: 'stretch', height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                        <div style={{ flex: '1 1 0', color: '#BABDBF', fontSize: 16,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Nombre de la casa</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Nombre del Producto</div>
                </div>
                <input
                  type="text"
                  placeholder='Nombre del producto'
                  className="form-control"
                  id="nombreProducto"
                  value={selectedProducto.nombre_producto || ''}
                  onChange={(e) => setSelectedProducto({ ...selectedProducto, nombre_producto: e.target.value })}
                />
              </div>
            </div>

            <div style={{ alignSelf: 'stretch', paddingTop: 16, paddingBottom: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ width: 467, height: 385, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Descripción del producto</div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                      <div style={{ width: 58, alignSelf: 'stretch', textAlign: 'right', color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>0/100</div>
                      <div style={{ width: 12, height: 12, position: 'relative' }}>
                        <div style={{ width: 9, height: 9, left: 1.50, top: 1.50, position: 'absolute', border: '1px #20338B solid' }}></div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    id="detalle"
                    value={selectedProducto.detalle || ''}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, detalle: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ width: 283, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                      <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Volumen (cc)</div>
                    </div>

                    <input
                      type="number"
                      className="form-control"
                      id="volumenCc"
                      value={selectedProducto.volumen_cc || 0}
                      onChange={(e) => setSelectedProducto({ ...selectedProducto, volumen_cc: +e.target.value })}
                    />

                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                      <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                      <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Graduación alcohólica (ABV)</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="gradoAlcoholico"
                      value={selectedProducto.grado_alcoholico || ''}
                      onChange={(e) => setSelectedProducto({ ...selectedProducto, grado_alcoholico: e.target.value })}
                    />
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                      <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Nivel de Amargor (IBU) </div>
                  <input
                    type="text"
                    className="form-control"
                    id="amargorIbu"
                    value={selectedProducto.amargor_ibu || ''}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, amargor_ibu: e.target.value })}
                  />
                </div>
                {/* <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16,  fontWeight: '700', wordWrap: 'break-word' }}>Detalle Amargor (IBU)</div>
                                        </div>
                                        <div style={{ alignSelf: 'stretch', height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 8, borderBottom: '0.20px #3555E8 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                            <div style={{ flex: '1 1 0', color: '#BABDBF', fontSize: 16,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Amargor (IBU)</div>
                                        </div>
                                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                            <div style={{ color: '#20338B', fontSize: 12,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Código Universal (SKU)</div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                      <div style={{ textAlign: 'right', color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>¿Qué es? </div>
                      <div style={{ width: 12, height: 12, position: 'relative' }}>
                        <div style={{ width: 9, height: 9, left: 1.50, top: 1.50, position: 'absolute', border: '1px #20338B solid' }}></div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="sku"
                    value={selectedProducto.sku || ''}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, sku: e.target.value })}
                  />
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa 8 dígitos</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                {/* <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                        <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16,  fontWeight: '700', wordWrap: 'break-word' }}>Resolución SEREMI</div>
                                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                            <div style={{ textAlign: 'right', color: '#20338B', fontSize: 12,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>¿Qué es?</div>
                                            <div style={{ width: 12, height: 12, position: 'relative' }}>
                                                <div style={{ width: 9, height: 9, left: 1.50, top: 1.50, position: 'absolute', border: '1px #20338B solid' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ alignSelf: 'stretch', height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 8, borderBottom: '0.20px #3555E8 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                        <div style={{ flex: '1 1 0', color: '#BABDBF', fontSize: 16,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Resolución SEREMI</div>
                                    </div>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                        <div style={{ color: '#20338B', fontSize: 12,  fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                                    </div>
                                </div> */}
              </div>
            </div>

            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Precio por unidad ($)</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="precioVenta"
                    value={selectedProducto.precio_venta || 0}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, precio_venta: +e.target.value })}
                  />
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                  </div>
                </div>
              </div>

              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Precio con descuento ($)</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="precioDescuento"
                    value={selectedProducto.precio_descuento || 0}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, precio_descuento: +e.target.value })}
                  />
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Stock</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    value={selectedProducto.stock || 0}
                    onChange={(e) => setSelectedProducto({ ...selectedProducto, stock: +e.target.value })}
                  />
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Ingresa solo números</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: 9, paddingRight: 9, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
              <div style={{ width: 468, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', paddingTop: 4, paddingBottom: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Imagen del producto</div>
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="imageCard"
                    onChange={handleFileChange}
                  />
                  <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Máx. XX MB.</div>
                  </div>
                </div>
              </div>
              <div style={{ width: 468, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', paddingTop: 4, paddingBottom: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Imagen de detalle del producto</div>
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="imageDetalle"
                    onChange={handleFileChangeDetalle}
                  />
                  <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#20338B', fontSize: 12, fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word' }}>Máx. XX MB.</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isPromo"
                      checked={selectedProducto.is_promo}
                      onChange={(e) => setSelectedProducto({ ...selectedProducto, is_promo: e.target.checked })}
                    />                                        <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Promoción</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ padding: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isRecomendado"
                      checked={selectedProducto.is_recomendado}
                      onChange={(e) => setSelectedProducto({ ...selectedProducto, is_recomendado: e.target.checked })}
                    />
                    <div style={{ color: '#343A40', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Recomendado</div>
                  </div>
                </div>
              </div>
              <div style={{ height: 40 }} />
              <div style={{ flex: '1 1 0', height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                <div onClick={handleCloseModal} style={{ width: 129, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, border: '2px #6C757D solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#BABDBF', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Vista previa</div>
                </div>
                <div onClick={handleCloseAndSave} style={{ width: 128, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#E9ECEF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#BABDBF', fontSize: 16, fontWeight: '600', wordWrap: 'break-word' }}>Guardar</div>
                </div>
              </div>
            </div>
          </div>
        </form>

      </Modal.Body>
    </Modal>

  );
}

export default FormularioProducto;
