import { useSelector } from 'react-redux';
import { EstadoGlobal } from '../../estados/global.estado';

export const CarritoResumen = () => {
  const productosDelCarrito = useSelector((state: EstadoGlobal) => state.carrito.productos);

  const total = productosDelCarrito.reduce((acumulado, producto) => {
    return acumulado + ((producto.precio_venta ?? 0) * (producto.cantidad ?? 0));
  }, 0);

  return (
    <>
      <div style={{ width: '100%', height: '600px', padding: 24, background: '#FFF3DD', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
        <div style={{ color: '#20338B', fontSize: 20, fontWeight: '700', wordWrap: 'break-word' }}>Resumen</div>

        {/* Sección desplazable para los productos */}
        <div style={{ alignSelf: 'stretch', height: 'calc(100% - 96px)', overflowY: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
          {productosDelCarrito.map((producto, idx) => (
            <div key={idx} style={{ alignSelf: 'stretch', padding: 16, borderTop: '2px #FFBA3B solid', borderBottom: '2px #FFBA3B solid', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
              <img style={{ width: 120, height: 120, borderRadius: 4 }} src={producto.base64_imagen_card ? `http://atari.mta.cl:35000/${producto.base64_imagen_card}` : '/cerveza_default.png'} />
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 16, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>{producto.nombre_producto}</div>
                <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                      <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>x1</div>
                    </div>
                    <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>$ {producto.precio_venta}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección fija para el contenido adicional */}
        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
          <div style={{ alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Costo del envío</div>
                </div>
                <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>-</div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
              {/* ... contenido adicional ... */}
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex' }}>
                  <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                    <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>Subtotal</div>
                  </div>
                  <div style={{ textAlign: 'center', color: '#20338B', fontSize: 16, fontWeight: '700', wordWrap: 'break-word' }}>$ {total}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarritoResumen;
