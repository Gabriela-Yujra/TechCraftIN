//regimedi

import React from 'react';

const Regimedi= () => {
  // Aquí podrías recuperar la lista de médicos registrados desde tu base de datos o un servicio
  const listaMedicos = [
    { id: 1, nombre: 'Dr. Juan Pérez' },
    { id: 2, nombre: 'Dra. María Gómez' },
    { id: 3, nombre: 'Dr. Pedro Rodríguez' },
    // Agrega más médicos según sea necesario
  ];

  return (
    <div>
      <h2>Médicos Registrados</h2>
      <ul>
        {listaMedicos.map(medico => (
          <li key={medico.id}>{medico.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Regimedi;