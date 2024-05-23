/*import './style/Baner.css';
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
import Pharma from "./pages/Pharma";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from './pages/Admin';
import Dashboard from'./componets-login/Dashboard';
import Header from './componets-login/Header';
/*import Regimedi from './componets-login/Regimedi';*/
/*import Sidebar from './componets-login/Sidebar';

function App() {
  return (
    <>
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
          <Route path="Default" element={<Default />} />
          <Route path="Pharma" element={<Pharma />} />
      </Route>
      

        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Admin" element={<Admin/>} />

        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Header" element={<Header/>} />
        <Route path="Sidebar" element={<Sidebar/>} />
      </Routes>



    </>
  );
}

export default App;*/


import './style/Baner.css';
import './App.css';
import logo from './assets/logo.png';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from "./pages/Layout";
import Nosotros from "./pages/Nosotros";
import Inicio from "./pages/Inicio";
import Default from "./pages/Default";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import Contactanos from "./pages/Contactanos";
import Pharma from "./pages/Pharma";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from './pages/Admin';
import Dashboard from './componets-login/Dashboard';
import Header from './componets-login/Header';
import Sidebar from './componets-login/Sidebar';

function App() {
  const location = useLocation();
  const noNavRoutes = ['/Login', '/Signup', '/Admin', '/Dashboard', '/Header', '/Sidebar'];

  const showNav = !noNavRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {showNav && (
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
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Portafolio" element={<Portafolio />} />
          <Route path="Contactanos" element={<Contactanos />} />
          <Route path="Default" element={<Default />} />
          <Route path="Pharma" element={<Pharma />} />
        </Route>

        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Header" element={<Header />} />
        <Route path="Sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
