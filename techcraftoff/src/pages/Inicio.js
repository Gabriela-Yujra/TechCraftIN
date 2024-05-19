import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AnimatedCounter from '../components/AnimatedCounter';
import RelojIcono from '../components/RelojIcono';
import '../style/Inicio.css';

const Inicio = () => {
  return (
    <div className="page-content">
      <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div>
          <img src="https://www.symbiose.cl/assets/nelson-Dn6sNyNd.png" alt="Descripción de la imagen 1" />
          <p className="legend">
            <h1>TECHCRAFT INNOVATION</h1>
            <h3>Empresa de Desarrollo de Software</h3>
          </p>
        </div>
        <div>
          <img src="https://www.symbiose.cl/assets/giovanni-Dhp8-1zR.png" alt="Descripción de la imagen 2" />
          <p className="legend2">
            Transforma tu negocio con soluciones digitales potentes y adaptables ara satisfacer tus objetivos
            actuales y desbloquear las oportunidades del futuro.
          </p>
        </div>
        <div>
          <img src="https://www.symbiose.cl/assets/team-DtMcQgIN.png" alt="Descripción de la imagen 3" />
          <p className="legend">
            <h2>SOLUCIONES ALINEADAS A TU NEGOCIO.</h2>
            <Link to="/Contactanos" className="button">CONTACTANOS</Link>
          </p>
        </div>
      </Carousel>
      <div className="content-container">
        <h2 className="content-title ">Desarrollo de Software</h2>
        <h3 className="element1-title">Profesionales en desarrollo y programación de tecnología</h3>
        <ul>
          <li className="elementos-list">
            <span>Desarrollamos páginas web personalizadas</span>
          </li>
          <li className="elementos-list">
            <span>Creamos aplicaciones móviles para dispositivos iOS y Android</span>
          </li>
          <li className="elementos-list">
            <span>Brindamos servicios para servidores Linux y Windows incluyendo montaje y ensamblaje</span>
          </li>
          <li className="elementos-list">
            <span>Mejoramos y optimizamos tus bases de datos para un mejor rendimiento</span>
          </li>
          <li className="elementos-list">
            <span>Asesoramiento y formación para garantizar una implementación efectiva y una capacitación completa</span>
          </li>
          <li className="elementos-list">
            <span>Desarrollamos tu sitio web según tus especificaciones, con garantía y soporte técnico</span>
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img src="https://www.logicspice.com/img/images/look/iWorks.webp" alt="Descripción de la imagen" />
      </div>
      <div className='container2'>
        <h2 class="content-title2 ">Empresa de Desarrollo Software</h2>
        <h3 class="element2-title">TECHCRAFT INNOVATION La Mejor Empresa de Desarrollo Software de Bolivia</h3>
        <p className='element-p'>Gracias a nuestra amplia experiencia en el mercado, nos hemos convertido en líderes 
        en desarrollo y programación de software. Nuestro equipo de expertos en lenguajes de programación creará una 
        estrategia personalizada para tu marca con herramientas de última tecnología, así, aseguramos el crecimiento 
        de tu empresa en el mundo digital. 
        <p>Con TECHCRAFT tendrás un sitio web atractivo, funcional, dinámico 
        y por supuesto, responsive.</p>
        </p>
      </div>
      <div className="image2-container">
        <img src="https://www.logicspice.com/img/images/look/your-pension.webp" alt="Descripción de la imagen" />
      </div>
      <div className='imagen3-container'>
        <img src="https://agenciadigitalnewyork.com/wp-content/uploads/2022/06/equipo-agencia-digital-bgt-1.jpg" alt="Descripción de la imagen" />
      </div>
      <div className='img-animacion'>
        <div className="texto-superpuesto">
          <h2>Programación de software profesional</h2>
          <h3>Expertos en Desarrollo de Software con resultados</h3>
        </div>
         <div className="contador-animacion"> 
         <div className='Animated1'>
          <RelojIcono />
          <AnimatedCounter fromValue={0} toValue={10} duration={2000} />
          <h4>Años en el mercado</h4>
         </div>
         <div className='Animated2'>
          <img src="https://agenciadigitalnewyork.com/wp-content/uploads/2020/05/servicios-de-marketing-digital-blanco.svg" alt="Descripción de la imagen" />
          <AnimatedCounter fromValue={0} toValue={200} duration={2000} />
          <h4>Proyectos</h4>
         </div>
         <div className='Animated3'>
          <img src="https://agenciadigitalnewyork.com/wp-content/uploads/2020/05/empresa-de-marketing-digital-blanco-.svg" alt="Descripción de la imagen" />
          <AnimatedCounter fromValue={0} toValue={100} duration={2000} />
          <h4>Apps Moviles</h4>
         </div>
         </div>
      </div>
      <div className='contenedor3'>
        <span><i>Tecnologías </i> con las que trabajamos</span>
        <p>Tecnologías de programación para aplicaciones móviles</p>
        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={2000} transitionTime={500}>
          <div>
            <img src="ruta_de_imagen1.jpg" alt="Descripción de la imagen 1" />
          </div>
          <div>
            <img src="ruta_de_imagen2.jpg" alt="Descripción de la imagen 2" />
          </div>
          <div>
            <img src="ruta_de_imagen19.jpg" alt="Descripción de la imagen 19" />
          </div>
        </Carousel>
      </div>



    </div>
  );
}

export default Inicio;

