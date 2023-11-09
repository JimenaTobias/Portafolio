import React from 'react';
import Foto from './fotito.jpeg';
import ig from './instagram.png';
import fb from './facebook.png';
import tw from './twitter.png';
import gh from './github.png';

import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio">
      <img src={Foto} alt="Tu foto" className="photo" />
      <h1 className='titulo'>🌻 ¡Bienvenido a mi Portafolio! 🌻</h1>

      <div className='inicio-container'>
        <p className='texto'>Soy Jimena Tobías, estudiante de la carrera de Ingeniería en Sistemas.</p>
      </div>

      <div className='inicio-container'>
        <p className='texto'>Me considero una persona bastante creativa, auténtica y organizada, aunque algo carente si seré.</p>
      </div>

      <div className='inicio-container'>
        <p className='texto'>Me gusta todo lo relacionado a Diseño Web y Seguridad Informática.</p>
      </div>
      
      <div className="iconos">
      <a href="aea" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" /> 
        </a>
        <a href="https://www.twitter.com/_yosoytobias" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="Twitter" /> 
        </a>
        <a href="https://www.instagram.com/yosoytobias_" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" /> 
        </a>
        <a href="https://github.com/JimenaTobias" target="_blank" rel="noopener noreferrer">
          <img src={gh} alt="GitHub" /> 
        </a>
      </div>

    </div>

  );
}

export default Inicio;