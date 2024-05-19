import '../style/Contactanos.css';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importa la instancia de Firestore


const Contactanos = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [consulta, setConsulta] = useState('');

  const guardar = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono:telefono,
        consulta:consulta
      });
      console.log("Documento escrito con ID: ", docRef.id);
      document.getElementById('nombre').value='';
      document.getElementById('apellido').value='';
      document.getElementById('email').value='';
      document.getElementById('telefono').value='';
      document.getElementById('consulta').value='';
    } catch (e) {
      console.error("Error al agregar documento: ", e);
    }
  };

  return (
    <>
      <div className='cabeceraContac'>
      <img src="https://img.freepik.com/foto-gratis/fondo-borroso-oscuro-abstracto-color-textura-degradado-suave-patron-sitio-web-brillante-brillante-encabezado-banner-o-imagen-arte-grafico-barra-lateral_1258-83064.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1711584000&semt=ais" alt="Descripción de la imagen 1" />
      </div>
      <div className='textoContac'>
      <h1>Comunicate con nosotros</h1>
      <p>Estamos a su servicio, para responder a cualquier pregunta que pueda tener acerca de nosotros o nuestros servicios.</p>
      </div>
      <div className='contactanos'>
      <div className='titulo'>
      <h1>Contactanos</h1>
      </div>
      <div className='inputs'>
      <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" id="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input type="text" id="email" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" id="telefono" placeholder="Numero de telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <input type="text" id="consulta" placeholder="Consulta" value={consulta} onChange={(e) => setConsulta(e.target.value)} />
      </div>
      <div className='boton'>
      <button className="submit" id="boton" onClick={guardar}>Enviar</button>
      </div>
      </div>
    </>
  );
}

export default Contactanos;




