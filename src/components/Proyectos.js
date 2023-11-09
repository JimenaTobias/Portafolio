import { React, useEffect } from 'react';
import CardArduino from './CardArduino';
import CardJava from './CardJava';
import CardSO from './CardSO';
import './Proyectos.css';

function Proyectos() {

  useEffect(() => {
    document.body.className = 'proyectos';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className='proyectos-container'>
      <h1 className='titulo-p'>📍 Mis Proyectos 📍</h1>
      <div className='row'>
        <div className='col-md-4'>
            <CardArduino />
        </div>

        <div className='col-md-4'>
            <CardJava />
        </div>

        <div className='col-md-4'>
            <CardSO />
        </div>
      </div>
    </div>
  );
}

export default Proyectos;