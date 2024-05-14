import React, { useState } from 'react';
import '../style/Servicios.css';

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
      </div>
      <div className="contenedor-herramientas">
        <div className="titulo-herramientas">
          <p>Herramientas</p>
        </div>
      </div>
      <div className="seleccion-herramientas">
        <div className="scroll-herramientas">
          <div className="opcion-herramienta1">
            <input className="check-herramienta1" type="checkbox" id="herramienta1" value="herramienta1" onChange={handleCheckboxChange}/>
            <label className="label-herramienta1" htmlFor="herramienta1">BackEnd</label>
          </div>
          <div className="opcion-herramienta2">
            <input className="check-herramienta2" type="checkbox" id="herramienta2" value="herramienta2" onChange={handleCheckboxChange}/>
            <label className="label-herramienta2" htmlFor="herramienta2">FrontEnd</label>
          </div>
          <div className="opcion-herramienta3">
            <input className="check-herramienta3" type="checkbox" id="herramienta3" value="herramienta3" onChange={handleCheckboxChange}/>
            <label className="label-herramienta3" htmlFor="herramienta3">Base de datos</label>
          </div>
          <div className="opcion-herramienta4">
            <input className="check-herramienta4" type="checkbox" id="herramienta4" value="herramienta4" onChange={handleCheckboxChange}/>
            <label className="label-herramienta4" htmlFor="herramienta4">Lenguajes de Programacion</label>
          </div>
        </div>
      </div>
      {mostrarMensaje1 && (
      <div className="card1">
        <div className="col-6 p-lg-0">
          <h2 className="idt-card-tool1">NodeJS</h2>
        </div>
          <div className="idt-card-tool__image-container">
            <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/13.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
        </div>
      </div>
      )}
      {mostrarMensaje2 && (
        <>
          <div className="card2">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">HTML5</h2>
            </div>
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/25.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
          </div>
          <div className="card3">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">React</h2>
            </div>
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/28.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
            </div>
          </div>
          <div className="card4">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">JavaScript</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/17.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">Bootstrap 5</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/24.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
        </>
      )}
      {mostrarMensaje3 && (
        <>
          <div className="card6">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">Mongo DB</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/16.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card7">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">Postgresql</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/10-1.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card8">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">MySQL</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/14.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card9">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">PhpMyAdmin</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/29.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
        </>
      )}
      {mostrarMensaje4 && (
        <>
          <div className="card10">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">C#</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/23.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card7">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">Python</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/8.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="card8">
            <div className="col-6 p-lg-0">
              <h2 className="idt-card-tool1">PHP</h2>
            </div>
            <div className="col-3 p-lg-0">
              <div className="idt-card-tool__image-container">
                <img className="idt-card-tool__image"src="https://tuatara.co/wp-content/uploads/2023/05/12.svg"alt="Descripción de la imagen" width="290px" height="337px" loading="lazy"/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Servicios;
