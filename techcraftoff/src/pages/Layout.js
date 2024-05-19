import { Outlet, Link } from "react-router-dom";
import '../style/Layout.css';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Layout = () =>{
 return (
   <div className="layout-container">
    <div className = "baner">
    <nav>
       <ul>
       </ul>
     </nav>
     <Outlet />
    </div>
    <div className = "footer">
    <nav>
        <div className="footer-content">
          <div className="footer-section1">
            <img src={logo} alt="Logo" className="logo-img" />
            <p>Somos TechCraft, especialistas en desarrollo de software, aplicaciones móviles.</p>
          </div>
          <div className="footer-section2">
            <h3>Contactos</h3>
            <dl>
              <dt>Direccion: </dt>
              <dd>Av. 6 de Agosto No. 2649 (Sopocachi), La Paz - Bolivia</dd>
              <dt>Teléfonos: </dt>
              <dd>
              <li><a href="tel:#" className="text-white">(+591) 71268143</a></li>
              <li><a href="tel:#" className="text-white">(+2) 2433811</a></li>
              </dd>
              <dt>E-mail: </dt>
              <dd>TechCraft@org.bo</dd>
            </dl>
          </div>
          <div className="footer-section3">
            <h3>Horario de atencion</h3>
            <dd>Lun-Vie: 08:00 am - 12:00 pm</dd>
            <dd>Lun-Vie: 14:00 pm - 19:00 pm</dd>

            <h3>Redes Sociales</h3>
            <div className="redes-sociales">
              <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com/tupagina" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/tupagina" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/tupagina" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer" className="whatsapp-icon"><FaWhatsapp /></a>
              <a href="https://www.youtube.com/tucanal" target="_blank" rel="noopener noreferrer" className="youtube-icon"><FaYoutube /></a>
            </div>
          </div>
        </div>
       <div className="footer-bottom">
          &copy; 2024 TechCraft Innovation S.R.L
       </div>
     </nav>
    </div>

   </div>
 );
}

export default Layout;
