import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoPharma from '../assets/logo-pharma.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../style/Login.css';

const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      console.log('Trying to sign in with', email, password);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Admin'); // Redirige a /admin después del login exitoso
    } catch (error) {
      console.error("Error during sign in:", error);
      setError(`Error during sign in: ${error.message} (code: ${error.code})`);
    }
  };

  return (
    <div className="container">
      <div className='fondo-login'>
        <img src="https://www.symbiose.cl/assets/team-DtMcQgIN.png" alt="Descripción de la imagen de fondo" />
      </div>
      <div className="form-container">
        <div className='logo-pharma'>
          <img src={logoPharma} alt="pharma" />
        </div>
        <div className='titulo-pharma-logo'>
          <h2>Bienvenido a PharmaTech Guia</h2>
        </div>
        <div className= 'letras-pharma'>
          <p>Ingrese sus datos</p>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <Link to="/signup" className="boton-signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;

