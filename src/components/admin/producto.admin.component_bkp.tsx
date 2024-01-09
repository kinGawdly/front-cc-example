// import React, { useState, useEffect, useRef } from 'react';
// import { ProductosService } from '../../services/producto.services';
// import { ProductoDto, CreateProductoDto, UpdateProductoDto } from "../admin/dtos.admin";
// import { Modal, Button } from 'react-bootstrap';

// import $ from 'jquery';
// import 'datatables.net-autofill-bs5';
// import 'datatables.net-buttons-bs5';
// import 'datatables.net-buttons/js/buttons.colVis.mjs';
// import 'datatables.net-buttons/js/buttons.html5.mjs';
// import 'datatables.net-buttons/js/buttons.print.mjs';
// import 'datatables.net-colreorder-bs5';

// import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
// import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js';


// export function ProductoAdminComponent() {
//   const [productos, setProductos] = useState<ProductoDto[]>([]);
//   const [selectedProducto, setSelectedProducto] = useState<CreateProductoDto | UpdateProductoDto>({
//     casa_cervecera_id: 1,
//     tipo: "",
//     grado_alcoholico: "",
//     amargor_ibu: "",
//     nombre_producto: "",
//     precio_compra: 0,
//     precio_venta: 0,
//     is_recomendado: false,
//     image_card_base64: "",
//     image_detalle_base64: "",
//     is_promo: false,
//     volumen_cc: 0,
//     detalle: "",
//     stock: 0,
//     precio_descuento: 0,
//     sku: ""
//   });

//   const tableRef = useRef<any>(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (productos.length > 0) {
//       inicializarDataTable();
//     }
//   }, [productos]);

//   const fetchData = async () => {
//     try {
//       const productosData = await ProductosService.obtenerCervezas();
//       setProductos(productosData);
//     } catch (error) {
//       console.error('Error al cargar productos:', error);
//     }
//   };

//   const inicializarDataTable = () => {
//     if ($.fn.DataTable.isDataTable(tableRef.current)) {
//       $(tableRef.current).DataTable().destroy();
//     }

//     $(tableRef.current).DataTable({
//       paging: true,
//       pageLength: 10,
//       data: productos,
//       language: {
//         url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
//       },
//       columns: [
//         {
//           data: 'base64_imagen_card',
//           title: 'Imagen',
//           render: function (data, type, row) {
//             return `<img src="${data}" alt="Imagen del Producto" style="max-width: 100px; max-height: 100px;" />`;
//           }
//         },
//         { data: 'nombre_producto', title: 'Nombre del Producto' },
//         { data: 'precio_venta', title: 'Precio de Venta' },
//         { data: 'sku', title: 'SKU' },
//         { data: 'id', title: 'ID' },
//         { data: 'precio_descuento', title: 'Precio con Descuento' },
//         { data: 'estrellas', title: 'Estrellas' },
//         { data: 'stock', title: 'Stock' },
//         { data: 'volumen_cc', title: 'Volumen (cc)' },
//         {
//           data: 'id',
//           title: 'Acciones',
//           render: function (data, type, row) {
//             return `<button type="button" class="btn btn-danger btn-eliminar" data-id="${data}">Eliminar</button>`;
//           }
//         }
//       ],

//     });

//     $(tableRef.current).off('click', '.btn-eliminar').on('click', '.btn-eliminar', function () {
//       const id = $(this).data('id');
//       handleEliminarProducto(id);
//     });
//   };

//   const handleEliminarProducto = async (id: number) => {
//     try {
//       // Realizar la petición DELETE al backend
//       const response = await fetch(`http://localhost:3000/productos/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       // Verificar si la eliminación fue exitosa
//       if (response.ok) {
//         console.log(`Producto con ID ${id} eliminado exitosamente.`);
//         // Actualizar la lista de productos después de la eliminación
//         const productosData = await ProductosService.obtenerCervezas();
//         setProductos(productosData);
//       } else {
//         console.error(`Error al eliminar producto: ${response.status}`);
//       }

//     } catch (error) {
//       console.error('Error al eliminar producto:', error);
//     }
//   };

//   const handleCrearProducto = async () => {
//     try {
//       await ProductosService.crearProducto(selectedProducto as CreateProductoDto);
//       const productosData = await ProductosService.obtenerCervezas();
//       productosData.casa_cervecera_id = 1; // seteado mientras no hay mantenedor
//       setProductos(productosData);
//       // Limpiar el formulario después de la creación
//       setSelectedProducto({
//         casa_cervecera_id: 1,
//         tipo: "",
//         grado_alcoholico: "",
//         amargor_ibu: "",
//         nombre_producto: "",
//         precio_compra: 0,
//         precio_venta: 0,
//         is_recomendado: false,
//         image_card_base64: "",
//         image_detalle_base64: "",
//         is_promo: false,
//         volumen_cc: 0,
//         detalle: "",
//         stock: 0,
//         precio_descuento: 0,
//         sku: ""
//       });
//     } catch (error) {
//       console.error('Error al crear producto:', error);
//     }
//   };

//   const handleActualizarProducto = async () => {
//     try {
//       await ProductosService.actualizarProducto(selectedProducto as UpdateProductoDto);
//       const productosData = await ProductosService.obtenerCervezas();
//       setProductos(productosData);
//       // Limpiar el formulario después de la actualización
//       setSelectedProducto({
//         casa_cervecera_id: 1,
//         tipo: "",
//         grado_alcoholico: "",
//         amargor_ibu: "",
//         nombre_producto: "",
//         precio_compra: 0,
//         precio_venta: 0,
//         is_recomendado: false,
//         image_card_base64: "",
//         image_detalle_base64: "",
//         is_promo: false,
//         volumen_cc: 0,
//         detalle: "",
//         stock: 0,
//         precio_descuento: 0,
//         sku: ""
//       });
//     } catch (error) {
//       console.error('Error al actualizar producto:', error);
//     }
//   };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (file) {
//       const base64 = await convertImageToBase64(file);
//       setSelectedProducto((prevSelectedProducto) => ({
//         ...prevSelectedProducto,
//         image_card_base64: base64
//       }));
//     }
//   };

//   const handleFileChangeDetalle = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (file) {
//       const base64 = await convertImageToBase64(file);
//       setSelectedProducto((prevSelectedProducto) => ({
//         ...prevSelectedProducto,
//         image_detalle_base64: base64
//       }));
//     }
//   };

//   const convertImageToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.result) {
//           resolve(reader.result.toString());
//         } else {
//           reject(new Error('Failed to convert image to base64.'));
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="container mt-3">

//       <button type="button" className="btn btn-primary" onClick={handleOpenModal}>
//         Crear Nuevo
//       </button>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Crear Nuevo Producto</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <form>
//             <div className="row g-3">
//               <div className="col-md-6">
//                 <label htmlFor="nombreProducto" className="form-label">Nombre del Producto:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="nombreProducto"
//                   value={selectedProducto.nombre_producto || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, nombre_producto: e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="tipo" className="form-label">Tipo:</label>
//                 <select
//                   className="form-select"
//                   id="tipo"
//                   value={selectedProducto.tipo || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, tipo: e.target.value })}
//                 >
//                   <option value="">Seleccionar Tipo</option>
//                   <option value="Lager">Lager</option>
//                   <option value="Pilsner">Pilsner</option>
//                   <option value="Ale">Ale</option>
//                   <option value="Stout">Stout</option>
//                   <option value="Porter">Porter</option>
//                   <option value="Bock">Bock</option>
//                   <option value="Lambic">Lambic</option>
//                   <option value="Hefeweizen">Hefeweizen</option>
//                 </select>
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="gradoAlcoholico" className="form-label">Grado Alcoholico:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="gradoAlcoholico"
//                   value={selectedProducto.grado_alcoholico || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, grado_alcoholico: e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="amargorIbu" className="form-label">Amargor IBU:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="amargorIbu"
//                   value={selectedProducto.amargor_ibu || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, amargor_ibu: e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="precioCompra" className="form-label">Precio de Compra:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="precioCompra"
//                   value={selectedProducto.precio_compra || 0}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, precio_compra: +e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="precioVenta" className="form-label">Precio de Venta:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="precioVenta"
//                   value={selectedProducto.precio_venta || 0}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, precio_venta: +e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="isRecomendado"
//                   checked={selectedProducto.is_recomendado}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, is_recomendado: e.target.checked })}
//                 />
//                 <label className="form-check-label" htmlFor="isRecomendado">¿Es Recomendado?</label>
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="imageCard" className="form-label">Imagen Card (base64):</label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   id="imageCard"
//                   onChange={handleFileChange}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="imageDetalle" className="form-label">Imagen Detalle (base64):</label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   id="imageDetalle"
//                   onChange={handleFileChangeDetalle}
//                 />
//               </div>

//               <div className="col-md-6 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="isPromo"
//                   checked={selectedProducto.is_promo}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, is_promo: e.target.checked })}
//                 />
//                 <label className="form-check-label" htmlFor="isPromo">¿Es Promoción?</label>
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="volumenCc" className="form-label">Volumen (en cc):</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="volumenCc"
//                   value={selectedProducto.volumen_cc || 0}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, volumen_cc: +e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="detalle" className="form-label">Detalle:</label>
//                 <textarea
//                   className="form-control"
//                   id="detalle"
//                   value={selectedProducto.detalle || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, detalle: e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="stock" className="form-label">Stock:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="stock"
//                   value={selectedProducto.stock || 0}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, stock: +e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="precioDescuento" className="form-label">Precio con Descuento:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="precioDescuento"
//                   value={selectedProducto.precio_descuento || 0}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, precio_descuento: +e.target.value })}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="sku" className="form-label">SKU:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="sku"
//                   value={selectedProducto.sku || ''}
//                   onChange={(e) => setSelectedProducto({ ...selectedProducto, sku: e.target.value })}
//                 />
//               </div>

//               <div className="col-12">
//                 <button type="button" className="btn btn-primary" onClick={handleCrearProducto}>
//                   Crear Producto
//                 </button>
//                 <button type="button" className="btn btn-success ms-2" onClick={handleActualizarProducto}>
//                   Actualizar Producto

//                 </button>
//               </div>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cerrar
//           </Button>
//           <Button variant="primary" onClick={handleCrearProducto}>
//             Crear Producto
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <table ref={tableRef} className="table table-bordered table-striped">
//         <thead>
//           <tr>
//             <th>imagen</th>
//             <th>Nombre del Producto</th>
//             <th>Precio de Venta</th>
//             <th>SKU</th>
//             <th>ID</th>
//             <th>Precio con Descuento</th>
//             <th>Estrellas</th>
//             <th>Stock</th>
//             <th>Volumen (cc)</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productos.map((producto: ProductoDto) => (
//             <tr key={producto.id}>

//               <td>{producto.nombre_producto}</td>
//               <td>{producto.sku}</td>
//               <td>{producto.precio_venta}</td>
//               <td>{producto.precio_descuento}</td>
//               <td>{producto.estrellas}</td>
//               <td>{producto.stock}</td>
//               <td>{producto.volumen_cc}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductoAdminComponent;
