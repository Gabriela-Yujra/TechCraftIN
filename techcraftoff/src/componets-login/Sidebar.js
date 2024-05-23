import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/medicos">Médicos</Link></li> 
        <li><Link to="/productos">Medicamentos</Link></li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </div>
  );
}

export default Sidebar;
