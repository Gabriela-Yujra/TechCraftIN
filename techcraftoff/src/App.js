import './style/Baner.css';
import './App.css';
import logo from './assets/logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from "./pages/Layout";
import Nosotros from "./pages/Nosotros";
import Inicio from "./pages/Inicio";
import Default from "./pages/Default";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import Contactanos from "./pages/Contactanos";

function App() {
  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <div className="espacio"></div>
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="nav-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">INICIO</Link>
              </li>
              <li>
                <Link to="/Nosotros">SOBRE NOSOTROS</Link>
              </li>
              <li>
                <Link to="/Servicios">SERVICIOS</Link>
              </li>
              <li>
                <Link to="/Portafolio">PORTAFOLIO</Link>
              </li>
              <li>
                <Link to="/Contactanos" className="button-link">CONTACTANOS</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="espacio2"></div>
      </div>

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Inicio />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Portafolio" element={<Portafolio />} />
          <Route path="Contactanos" element={<Contactanos />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
