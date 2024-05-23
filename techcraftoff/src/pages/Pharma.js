import React from 'react';
import { Link } from 'react-router-dom';
import appPharma from'../assets/intro-pharma.png'
import vista1 from'../assets/vista1.png'
import vista2 from'../assets/vista2.png'
import vista3 from'../assets/vista3.png'
import videoPharma from '../assets/pharma-video.mp4';
import '../style/Pharma.css'

const Pharma = () => {
  return (
    <>
    <div className="app-pharma">
    <div className='img-app-pharma'>
        <img src={appPharma} alt="App Screenshot" />
    </div>
      <div className="app-promo-content">
        <h2>PharmaTech Guia</h2>
        <p>Pharma Tech Guía es una aplicación móvil que sincroniza la información del 
            Vademécum, ofreciendo acceso rápido y actualizado a datos sobre medicamentos. 
            Ideal para profesionales de la salud y estudiantes, Pharma Tech Guía pone la 
            información farmacéutica confiable al alcance de tu mano.</p>
        <p>La aplicación está disponible tanto para sistema Android a través de <a href="https://play.google.com">Google Play</a>, como para iOS en <a href="https://www.apple.com/app-store/">App Store</a>.</p>
        <div className="app-links">
          <a href="https://www.apple.com/app-store/">
            <img src='https://www.appandweb.es/wp-content/uploads/2017/09/app-store-300x111.png' alt="App Store" />
          </a>
          <a href="https://play.google.com">
            <img src='https://www.appandweb.es/wp-content/uploads/2017/09/g-play-300x111.png' alt="Google Play" />
          </a>
        </div>
    </div>
    </div>
      <div className='tecno-pharma'>
        <h2>Tecnologia desarrollada</h2>
        <p>
        <img loading="lazy" decoding="async" className="tech-image" src="https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png" alt="CSS3" />
        <img loading="lazy" decoding="async" className="tech-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/210px-Firebase_icon.svg.png?20231023160108" alt="HTML5" />
        <img loading="lazy" decoding="async" className="tech-image" src="https://w7.pngwing.com/pngs/638/295/png-transparent-android-software-development-logo-android-text-grass-desktop-wallpaper.png" alt="PHP7" />
      </p>
      </div>
    <div className='pantallas-pharma'>
        <p>
        <img src={vista1} alt="App Screenshot" />
        <img src={vista2} alt="App Screenshot" />
        <img src={vista3} alt="App Screenshot" />
        </p>
    </div>

    <div className='contenedor-pharma'>
    <div className='pharmaVideo'>
        <video autoPlay muted loop id="fondo-video">
          <source src={videoPharma} type="video/mp4" />
        </video>
    </div>
    <div className='caracteristicas-pharma'>
        <h3>Caracteristicas</h3>
    <ul className="icons-list icon-checkmark-circle-list colored">
        <li>
          <p>Disponible para Android e iOS</p>
        </li>
        <li>
          <p>Sincroniza y actualiza constantemente de la información del Vademécum.</p>
        </li>
        <li>
          <p>Acceso a datos completos sobre dosis, indicaciones, contraindicaciones, efectos secundarios y precauciones.</p>
        </li>
        <li>
          <p>Guarda medicamentos y consultas frecuentes para un acceso rápido.</p>
        </li>
        <li>
          <p>Información sobre ofertas y descuentos en farmacias.</p>
        </li>
      </ul>
      <div className='link-registro'>
          <Link to="/Login" className="button-pharma">REGISTRATE</Link>
        </div>
    </div>
    </div>

    </>
  );
};

export default Pharma;
