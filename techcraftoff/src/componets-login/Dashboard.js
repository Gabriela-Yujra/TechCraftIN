// components/Dashboard.js

import React from 'react';

const Dashboard = () => {
  // Simulación de datos de estadísticas
  const stats = {
    users: 128,
    orders: 56,
    products: 74
  };

  return (
    <div className="dashboard">
      <h1 className="brand2">PHARMATECH</h1>
      <p className="welcome">¡Bienvenido al panel de administración!</p>
      <div className="stats">
        <h2>Estadísticas</h2>
        <ul>
          <li>Médicos registrados: {stats.users}</li>
          <li>Reservas procesadas: {stats.orders}</li>
          <li>Cantida de medicamentos: {stats.products}</li>
        </ul>
      </div>
      <div className="actions">
        <h2>Acciones recomendadas</h2>
        <ul>
          <li><a href="/usuarios">Administrar médicos</a></li>
          <li><a href="/productos">Administrar medicamentos</a></li>
          <li><a href="/pedidos">Ver reservas</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;