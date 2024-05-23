//sidebar
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      <li><a href="/" target="_blank">Inicio</a></li>
      <li><a href="#medicos" target="_self">Médicos</a></li> {/* Cambiado target="_blank" por target="_self" */}
        <li><a href="/productos" target="_blank">Medicamentos</a></li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </div>
  );
}

export default Sidebar;