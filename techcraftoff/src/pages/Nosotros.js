import React from 'react';
import video from '../assets/video1.MOV';
import '../style/Nosotros.css';

const Nosotros = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>
          <span>Descubre <i>quiénes somos</i> y por qué se nos da tan bien nuestro trabajo</span>
          </h1>
        </div>
      </div>
      <div className='contenedor-nosotros2'>
        <div className='contenedor21'>
        <p><b> Disciplina creatividad y resultados</b> siempre van de la mano</p>
        </div>
        <div className='contenedor22'>
        <p>Somos una <b>Empresa Líder en el Mercado</b>. 
        TechCraft Innovations S.R.L. surgió en 2015 en La Paz, Bolivia, bajo la visión 
        compartida de un grupo de jóvenes emprendedores apasionados por la tecnología, 
        la empresa surgió como respuesta a la creciente demanda de soluciones 
        innovadoras en el campo del desarrollo web y aplicaciones móviles.</p>
        </div>
      </div>
      <div className='contenedor-nosotros3'>
        <div className='contenedor-mision'>
          <span>Nuestra Mision</span>
          <p>En TechCraft Innovations S.R.L., nuestra misión es proporcionar 
            soluciones tecnológicas innovadoras y de alta calidad que impulsen 
            el éxito de nuestros clientes. </p>
        </div>
        <div className='contenedor-vision'>
          <span>Nuestra Vision</span>
          <p>Nuestra visión en TechCraft Innovations S.R.L. es ser reconocidos como 
            líderes en el desarrollo web y de aplicaciones móviles en Bolivia. Buscamos 
            ser la primera opción para empresas y organizaciones que buscan soluciones 
            digitales efectivas y creativas que les ayuden a alcanzar sus objetivos 
            comerciales y tecnológicos.</p>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
