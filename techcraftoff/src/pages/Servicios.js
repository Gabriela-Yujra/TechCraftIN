import React, { useState } from 'react';
import '../style/Servicios.css';
import LogoCarousel from '../components/logotipos';

const Servicios = () => {
  const [mostrarMensaje1, setMostrarMensaje1] = useState(false);
  const [mostrarMensaje2, setMostrarMensaje2] = useState(false);
  const [mostrarMensaje3, setMostrarMensaje3] = useState(false);
  const [mostrarMensaje4, setMostrarMensaje4] = useState(false);


  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (id === "herramienta1") {
      setMostrarMensaje1(checked);
    } else if (id === "herramienta2") {
      setMostrarMensaje2(checked);
    } else if (id === "herramienta3") {
      setMostrarMensaje3(checked);
    } else if (id === "herramienta4") {
      setMostrarMensaje4(checked);
    }
  };
  

  return (
    <>
      <div className='contenedor-servicios'>
        <img src="https://www.occamagenciadigital.com/hs-fs/hubfs/web_develop_hero.webp?width=2560&height=1440&name=web_develop_hero.webp" alt="Descripción de la imagen 1" />
      </div>
      <div className="letras">
        <span>Nuestros <i>servicios</i></span>
        <p>¡Todos nuestros servicios están disponibles para ti!</p>
      </div>
      <div className="titulo-servicios">
        <h1>Servicios de <i>desarrollo de software</i></h1>
      </div>

      <div className="tipos-servicio">
        <div className="servicio1">
          <img src="https://appdesign.dev/wp-content/uploads/2021/01/Desarrollo-de-apps-nativas.png" alt="android" loading="lazy" width="101" height="100" style={{ maxWidth: "100%", height: "auto" }} />
          <h3>Desarrollo de Apps</h3>
          <p>Desarrollo de aplicaciones Android e iOS conectadas al administrador</p>
        </div>
          <div className="servicio2">
          <img src="https://appdesign.dev/wp-content/uploads/2020/08/disen%CC%83o-web.png" alt="android" loading="lazy" width="101" height="100" style={{ maxWidth: "100%", height: "auto" }} />
          <h3>Desarrollo Web</h3>
          <p>Soluciones de desarrollo web adaptadas para cada cliente</p>
          </div>
          <div className="servicio3">
          <img src="https://appdesign.dev/wp-content/uploads/2020/08/desarrollo-web-1.png" alt="android" loading="lazy" width="101" height="100" style={{ maxWidth: "100%", height: "auto" }} />
          <h3>Desarrollo Software</h3>
          <p>Realizamos desarrollo de Software personalizado</p>
          </div>
          <div className="servicio4">
          <img src="https://appdesign.dev/wp-content/uploads/2022/05/Implementacion-API.png" alt="android" loading="lazy" width="101" height="100" style={{ maxWidth: "100%", height: "auto" }} />
          <h3>Implementacion API</h3>
          <p>Implementación de plataformas externas y migración de software</p>
          </div>
          <div className="servicio5">
          <img src="https://appdesign.dev/wp-content/uploads/2020/08/Seguridad-con-Wordpress.png" alt="android" loading="lazy" width="101" height="100" style={{ maxWidth: "100%", height: "auto" }} />
          <h3>Ciberseguridad</h3>
          <p>Últimas versiones y actualizaciones a prueba de errores</p>
          </div>
        </div>
      <div className='intro-heramientas'>
        <h1>Conoce nuestras <i>herramientas de software</i></h1>
        <LogoCarousel />
      </div>
    </>
  );
}

export default Servicios;
