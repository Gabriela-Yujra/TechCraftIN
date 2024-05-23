import '../style/Portafolio.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logoPharma from '../assets/logo-pharma.png';
import logoHands from '../assets/logo-hands.png';

const Portafolio = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop id="background-video">
          <source src='https://www.occamagenciadigital.com/hubfs/disenopagweb_v1.mp4' type="video/mp4" />
        </video>
        <div className="content">
          <h1>
          <span>NUESTROS <i>PROYECTOS !</i></span>
          </h1>
        </div>
      </div>
      <div className='proyectos'>
        <h1>Proyectos <i>Destacados</i></h1>
      </div>
      <div className="row">
      <div className="tarjeta" data-wow-duration="1s" data-wow-delay=".2s">
        <div className="features-box">
        <div className="features-icon d-table">
          <div className="features-icon-inner d-table-cell">
            <img src={logoPharma} alt="pharma" />
          </div>
        </div>
          <h3>PharmaTech Guia</h3>
          <p>Aplicación móvil que sincroniza la 
            información del Vademécum, ofreciendo acceso rápido y actualizado 
            a datos sobre medicamentos. </p>
          <div></div>
          <div className='link'>
          <Link to="/Pharma" className="button">VER PROYECTO</Link>
          </div>
        </div>
      </div>
      <div className="tarjeta" data-wow-duration="1.6s" data-wow-delay=".4s">
        <div className="features-box">
        <div className="features-icon d-table">
          <div className="features-icon-inner d-table-cell">
            <img src={logoHands} alt="hands" />
          </div>
        </div>
          <h3>Hands On</h3>
          <p>Hands On es una innovadora aplicación móvil que actúa como traductor bidireccional de lenguaje de señas.</p>
          <div className='link'>
          <Link to="/Servicios" className="button">VER PROYECTO</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Portafolio;

