import React from 'react';
import './Proyectos.css'
import java from './java.png';

function CardJava() {
  return (
    <div className='card'>
      <img src={java} alt='logo java' />
      <div className='card-body'>
        <h4 className='card-title'>🧮 Operadores Aritméticos 🧮</h4>
        <p className='card-text'>Es un mini proyecto básico que realice para un curso de la Universidad, se trata de los distintos operadores aritméticos que existen.</p>
        <a href='https://github.com/JimenaTobias/OperadoresAritmeticos.git' className='btn btn-outline-secondary'>Click aquí</a>
      </div>
    </div>
  );
}

export default CardJava;