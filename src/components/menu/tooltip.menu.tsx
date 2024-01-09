// src\components\menu\tooltip.menu.tsx

import Popover from 'bootstrap/js/dist/popover';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { EstadoGlobal } from '../../estados/global.estado';
import IcoCarro from '/menu/shopping-cart.png';

export const MenuCarritoToolTip = () => {
  const popoverRef = useRef<HTMLDivElement>(null); // Cambiando a Div para que coincida con tu botón redondo
  const productosDelCarrito = useSelector((state: EstadoGlobal) => state.carrito.productos);

  useEffect(() => {
    if (popoverRef.current) {
      const listaProductos = productosDelCarrito.map(producto =>
        `<li key=${producto.id}>${producto.nombre_producto}</li>`
      ).join('');

      const popover = new Popover(popoverRef.current, {
        html: true,
        content: `
                    <div>
                        <p>Contenido del carrito</p>
                        ${listaProductos}
                    </div>
                `,
        title: 'Menú carrito',
      });

      popoverRef.current.addEventListener('mouseenter', () => popover.show());
      popoverRef.current.addEventListener('mouseleave', () => popover.hide());
    }
  }, [productosDelCarrito]);

  return (
    <div ref={popoverRef} className="nav-item ml-auto d-flex justify-content-center align-items-center p-2 bg-white rounded-circle shadow btn-carrito relative">
      <Link to="/carrito">
        <i className="icono-carrito">
          <img src={IcoCarro} />
        </i>
        <span className="badge-carrito absolute -top-1 -right-1 bg-red-500 size-4 text-[12px] font-bold rounded-full text-white flex justify-center items-center">3</span>
      </Link>
    </div>
  );
};

export default MenuCarritoToolTip;
