import './home.component.css';

import { SubMenuComponent } from './submenu/submenu.component';

import BannerComponent from './banner/banner.component';
import { PromosComponent } from './promos/promos.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
// import { ModalEdad } from '../modal_edad/ModalEdad';

export function Home() {
  return (
    <div className='mb-40'>
      {/* <ModalEdad /> */}
      <BannerComponent />
      <SubMenuComponent />
      <PromosComponent />
      <RecomendadosComponent />
    </div>
  );
}

export default Home;
