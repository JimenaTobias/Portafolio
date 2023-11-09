import React from 'react';
import './Proyectos.css'
import arduino from './arduino.png';

function CardArduino() {
  return (
    <div className='card'>
      <img src={arduino} alt='logo arduino' />
      <div className='card-body'>
        <h4 className='card-title'>🌡️ Sensor de Temperatura 🌡️</h4>
        <p className='card-text'>Mis primeros pasos con Arduino, armé un circuito con un sensor de temperatura para probar su funcionalidad.</p>
        <a href='https://github.com/JimenaTobias/Lab-4.git' className='btn btn-outline-secondary'>Click aquí</a>
      </div>
    </div>
  );
}

export default CardArduino;