import React from 'react';
import Dashboard from '../componets-login/Dashboard';
import Header from '../componets-login/Header';
import Sidebar from '../componets-login/Sidebar';
/*import '../style/Admin.css';*/

const Admin = () => {
  return (
    <div>
      <div className="header">
        <Header />
        <div className="admin-panel">Panel Administrativo</div>
      </div>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
    </div>
  );
};

export default Admin;


