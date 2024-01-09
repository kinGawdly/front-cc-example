import { SubMenuItemComponent } from './item_submenu/item.submenu';
import './submenu.component.css';

import cervezasSubMenu from '/inicio/cervezas.png';
import merchSubMenu from '/inicio/merch.png';
import packsSubMenu from '/inicio/packs.png';
import subsSubMenu from '/inicio/subscripciones.png';

export function SubMenuComponent() {
  return (
    <div className="container-fluid">
      <div className="ms-5 me-5 mt-5 d-flex justify-content-center align-items-center flex-wrap gap-28">
        <SubMenuItemComponent to="/cervezas" src={cervezasSubMenu} alt="Cervezas" text="Cervezas" />
        <SubMenuItemComponent to="/packs" src={packsSubMenu} alt="Packs" text="Packs" />
        <SubMenuItemComponent to="/suscripciones" src={subsSubMenu} alt="Suscripciones" text="Suscripciones" />
        <SubMenuItemComponent to="/merchandisings" src={merchSubMenu} alt="Merch" text="Merch" />
      </div>
    </div>
  );
}

export default SubMenuComponent;
