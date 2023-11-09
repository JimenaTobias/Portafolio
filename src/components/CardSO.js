import React from 'react';
import './Proyectos.css'
import sistemas from './sistema.jpg';

function CardSO() {
  return (
    <div className='card'>
      <img src={sistemas} alt='logo sistemas' />
      <div className='card-body'>
        <h4 className='card-title'>💻 Administrador de Tareas 💻</h4>
        <p className='card-text'>Proyecto que consta de una simulación de un administrador de tareas, este se realizó en grupo para el curso de Sistemas Operativos.</p>
        <a href='https://github.com/JimenaTobias/AdministradorDeTareas-SO.git' className='btn btn-outline-secondary'>Click aquí</a>
      </div>
    </div>
  );
}

export default CardSO;