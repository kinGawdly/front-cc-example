import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Provider } from 'react-redux';
import store from './store'; // Check the correct path to your store


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoAdminComponent from './components/admin/producto.admin.component';
import AyudaDetalle from './components/ayuda/ayuda.ayuda';
import ContactoDetalle from './components/ayuda/contactanos.ayuda';
import FaqDetalle from './components/ayuda/faq.ayuda';
import TrackDetalle from './components/ayuda/track.ayuda';
import CarritoContacto from './components/carrito/contacto.carrito';
import CarritoEnvio from './components/carrito/envio.carrito';
import CarritoFormaPago from './components/carrito/forma_pago.carrito';
import CarritoLista from './components/carrito/lista.carrito';
import { CervezaDetalle } from './components/cervezas/detalle.cervezas';
import { CervezasLista } from './components/cervezas/lista.cervezas';
import CasasConocenos from './components/conocenos/casas.conocenos';
import ConocenosConocenos from './components/conocenos/conocenos.conocenos';
import QuienesConocenos from './components/conocenos/quienes.conocenos';
import ValdiviaConocenos from './components/conocenos/valdivia.conocenos';
import FooterComponent from './components/footer/footer.component';
import { Home } from './components/home/home.component';
import LoginComponent from './components/login/login.component';
import MenuComponent from './components/menu/menu.component';
import { MerchandisingDetalle } from './components/merchandising/detalle.merchandising';
import { MerchandisingLista } from './components/merchandising/lista.merchandising';
import { PacksDetalle } from './components/packs/detalle.packs';
import { PacksLista } from './components/packs/lista.packs';
import PerfilCrear from './components/perfil/crear.perfil';
import DatosPerfil from './components/perfil/datos.perfil';
import AnterioresPerfil from './components/perfil/pedidos.anteriores.perfil';
import { SuscripcionDetalle } from './components/suscripciones/detalle.suscripcion';
import { SuscripcionesLista } from './components/suscripciones/lista.suscripciones';

export function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <MenuComponent />

          <Routes>
            <Route path="/login" element={<LoginComponent />} />

            <Route path="/admin" element={<ProductoAdminComponent />} />

            <Route path="/" element={<Home />} />
            <Route path="cervezas/" element={<CervezasLista />} />
            <Route path="productos/:id" element={<CervezaDetalle />} />

            <Route path="packs/" element={<PacksLista />} />
            <Route path="pack/:id" element={<PacksDetalle />} />

            <Route path="suscripciones/" element={<SuscripcionesLista />} />
            <Route path="suscripcion/:id" element={<SuscripcionDetalle />} />

            <Route path="merchandisings/" element={<MerchandisingLista />} />
            <Route path="merchandising/:id" element={<MerchandisingDetalle />} />

            <Route path="carrito/" element={<CarritoLista />}></Route>
            <Route path="contacto/" element={<CarritoContacto />} ></Route>
            <Route path="envio/" element={<CarritoEnvio />} ></Route>
            <Route path="forma-pago/" element={<CarritoFormaPago />} ></Route>

            <Route path="ayuda/" element={<AyudaDetalle />} />
            <Route path="faq/" element={<FaqDetalle />} />
            <Route path="track/" element={<TrackDetalle />} />
            <Route path="contactanos/" element={<ContactoDetalle />} />

            <Route path="crear-perfil/" element={<PerfilCrear />} />
            <Route path="datos/" element={<DatosPerfil />} />
            <Route path="anteriores/" element={<AnterioresPerfil />} />

            <Route path="conocenos/" element={<ConocenosConocenos />} />
            <Route path="casas/" element={<CasasConocenos />} />
            <Route path="quienes/" element={<QuienesConocenos />} />
            <Route path="valdivia/" element={<ValdiviaConocenos />} />

          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

