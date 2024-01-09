import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { EstadoGlobal } from '../../estados/global.estado';
import ProductosService from '../../services/producto.services';
import { ProductoDtoAdmin, ProductoRespuestaDtoAdmin } from './dtos.admin';
import FormularioProducto from './producto.form.admin.component';

function useAuthState() {
  return useSelector((state: EstadoGlobal) => state.auth);
}

const columns = (handleDelete: any, handleShowUpdateModal: any) => [
  { name: 'ID', selector: (row: ProductoRespuestaDtoAdmin) => row.id, sortable: true },
  {
    name: 'Imagen',
    selector: (row: ProductoRespuestaDtoAdmin) => row.base64_imagen_card,
    cell: (row: ProductoRespuestaDtoAdmin) => (
      <img
        src={"http://atari.mta.cl:35000/" + row.base64_imagen_card}
        alt="Imagen del Producto"
        style={{ maxWidth: '100px', maxHeight: '100px' }}
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: false,
  },
  { name: 'Nombre', selector: (row: ProductoRespuestaDtoAdmin) => row.nombre_producto, sortable: true },
  { name: 'Precio', selector: (row: ProductoRespuestaDtoAdmin) => row.precio_venta, sortable: true },
  {
    cell: (row: any) => (
      <Button variant="warning" onClick={() => handleShowUpdateModal(row.id)}>
        Actualizar
      </Button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    cell: (row: any) => (
      <Button variant="danger" onClick={() => handleDelete(row.id)}>
        Eliminar
      </Button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

function ProductoAdminComponent() {
  const [productos, setProductos] = useState<ProductoDtoAdmin[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProducto, setSelectedProducto] = useState<ProductoDtoAdmin>(new ProductoDtoAdmin());

  const authState = useAuthState();

  const fetchData = async () => {
    try {
      const productosData = await ProductosService.obtenerCervezas();
      setProductos(productosData);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await ProductosService.eliminarProducto(id, authState.token || "");
      setProductos(productosAnteriores => productosAnteriores.filter(producto => producto.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleCrearProducto = async () => {
    try {
      await ProductosService.crearProducto(selectedProducto as ProductoDtoAdmin, authState.token || "");
      const productosData = await ProductosService.obtenerCervezas();
      setProductos(productosData);
      setSelectedProducto({});
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  const handleActualizarProducto = async () => {
    try {
      if (!selectedProductId) {
        throw new Error("No se ha proporcionado un ID de producto para la actualización.");
      }

      await ProductosService.actualizarProducto(selectedProductId, selectedProducto as ProductoDtoAdmin, authState.token || "");

      const productosData = await ProductosService.obtenerCervezas();
      setProductos(productosData);

      setSelectedProducto({});
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, isDetalle: boolean = false) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64 = await convertImageToBase64(file);
      setSelectedProducto((prevSelectedProducto) => ({
        ...prevSelectedProducto,
        [isDetalle ? 'image_detalle_base64' : 'image_card_base64']: base64
      }));
    }
  };

  const handleFileChangeDetalle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64 = await convertImageToBase64(file);
      setSelectedProducto((prevSelectedProducto) => ({
        ...prevSelectedProducto,
        image_detalle_base64: base64
      }));
    }
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        } else {
          reject(new Error('Failed to convert image to base64.'));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleShowModal = () => {
    // Resetea el ID seleccionado para un nuevo producto
    setSelectedProductId(null);
    setShowModal(true);
  };

  const handleShowUpdateModal = async (id: number) => {
    try {
      const productoParaActualizar = await ProductosService.obtenerCerveza(id);

      setSelectedProducto(productoParaActualizar);

      setShowModal(true);
    } catch (error) {
      console.error('Error al cargar datos del producto:', error);
    }
  };


  const handleCloseModal = () => setShowModal(false);

  return (
    <>

      <Button variant="primary" onClick={handleShowModal}>
        Nuevo
      </Button>

      <FormularioProducto
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedProducto={selectedProducto}
        setSelectedProducto={setSelectedProducto}
        handleCrearProducto={handleCrearProducto}
        handleActualizarProducto={handleActualizarProducto}
        handleFileChange={handleFileChange}
        handleFileChangeDetalle={handleFileChangeDetalle}
      />

      <DataTable
        title="Lista de Productos"
        columns={columns(handleDelete, handleShowUpdateModal)}
        data={productos}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30, 50]}
        highlightOnHover
      />

    </>
  );
}

export default ProductoAdminComponent;
