// src\components\footer\footer.component.tsx
import './footer.component.css';
import logoImg from "/menu/logo.svg";


export function FooterComponent() {
  return (
    <>
      <div className="bg-[#FDB42E] text-center py-10">
        <p className="text-3xl font-bold text-[#343A40]">
          ¡Alerta máxima! Tienes sed y nosotros la chela.<br />¿Coincidencia? No lo creo jiji
        </p>
      </div>
      <footer className="bg-[#20338B] flex justify-between p-10">
        <div className="grid grid-cols-3 gap-8 px-4 py-6">
          <div>
            <img src={logoImg} alt="logo" className="size-44" />
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Conócenos</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Quienes somos</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Valdivia: capital cervecera</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Casas Cerveceras</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">¿Necesitas ayuda?</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">Preguntas frecuentes</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Estado de envios</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 pt-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="mb-4">
                <p>correo@gmail.com</p>
              </li>
              <li className="mb-4">
                <p>+56 9 0000 0000</p>
              </li>
              <li className="mb-4">
                <p>@instagram</p>
              </li>
            </ul>
          </div>
        </div>
      </footer >
    </>

  );
}

export default FooterComponent;
