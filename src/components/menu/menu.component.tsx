// src\components\menu\menu.component.tsx

import { Link } from 'react-router-dom';
import './menu.component.css';
import MenuCarritoToolTip from './tooltip.menu';
import IcoBuscar from '/menu/buscar.svg';
import logoImg from '/menu/logo.svg';
import IcoUser from '/menu/user.png';

export function MenuComponent() {
  return (
    <header className="bg-[#E1E6FC] flex items-center gap-20 px-10 py-6 justify-between">
      <div className='flex gap-14'>
        <Link className="navbar-brand" to="/" >
          <img src={logoImg} alt="logotipo" className='size-24' />
        </Link>

        <nav className="flex items-center gap-4 *:p-2 *:text-[#343A40] hover:*:underline hover:*:underline-offset-8">
          <Link to="/" className="font-bold">Inicio</Link>
          <Link to="/cervezas">Cervezas</Link>
          <Link to="/packs">Packs</Link>
          <Link to="/suscripciones">Suscripciones</Link>
          <Link to="/merchandisings">Merch</Link>
        </nav>

      </div>
      <div className="flex items-center gap-12">
        <div className="flex gap-4">

          <div className="nav-item relative">
            <input type="text" className="form-control" placeholder="Buscar" />
            <i className="icono-buscar absolute right-2 top-2">
              <img src={IcoBuscar} />
            </i>
          </div>

          <div className="nav-item ml-auto">
            <Link to="/crear-perfil">
              <div className="nav-item ml-auto d-flex justify-content-center align-items-center p-2 bg-white rounded-circle shadow btn-usuario">
                <i className="icono-usuario"> <img src={IcoUser} /> </i>
              </div>
            </Link>
          </div>

          <div className="nav-item ml-auto">
            <MenuCarritoToolTip />
          </div>

        </div>
      </div>
    </header >
  );
}

export default MenuComponent;
