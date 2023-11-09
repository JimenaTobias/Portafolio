import { React, useEffect } from 'react';
import './SobreMi.css';
import img1 from './img.jpg';
import img2 from './img1.jpg';
import img3 from './img2.jpg';
import img4 from './img3.jpg';

function SobreMi() {

  useEffect(() => {
    document.body.className = 'sobremi';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className='sobremi'>
      <h1>🎈​ Sobre Mí 🎈​</h1>
      <div className='sobremi-container1'>
        <img src={img1} alt='imagen 1' />
        <h2>Estudios</h2>
        <p>꒰🎓꒱ Me gradué como Bachiller en Ciencias y Letras con Orientación en Computación, fue ahí donde me empecé a apasionar con todo lo relacionado a Sistemas, así que decidí estudiar Ingeniería en Sistemas. Actualmente estudio en la Universidad Mariano Gálvez y estoy en 4to año de la carrera.</p>       
      </div>

      <div className='sobremi-container2'>
        <img src={img2} alt='imagen 2' />
        <h2>Intereses y Pasiones</h2>
        <p>
          ꒰🎤꒱ Me encanta bailar y cantar, aunque no lo hago bien, pero lo disfruto.<br></br>
          ꒰🧁​꒱ Me fascina la repostería y podría pasar todo el día cocinando pasteles.<br></br>
          ꒰💬꒱ Disfruto mucho pasar tiempo sola y reflexionar sobre la vida.<br></br>
          ꒰🪐​꒱ Adoro tomar fotografías del cielo y soy amante de la Astronomía.
        </p>       
      </div>

      <div className='sobremi-container3'>
        <img src={img4} alt='imagen 3' />
        <h2>Metas</h2>
        <p>
          ꒰🎓꒱ Una de mis metas principales es graduarme de la Universidad. <br></br>
          ꒰✈️​​꒱ Viajar por el mundo.<br></br>
          ꒰🖥️​​꒱ Adentrarme más en el mundo de Desarollo Web.<br></br>
          ꒰​📣​​​꒱ Aprender nuevos idiomas y reforzar mi inglés.<br></br>
        </p>      
      </div>

      <div className='sobremi-container4'>
        <img src={img3} alt='imagen 4' />
        <h2>Experiencia</h2>
        <p>
          Tengo conocimiento en los siguientes lenguajes de programación: <br></br>
          ꒰💫​꒱ Java, C++, PHP, HTML, CSS, Python.
        </p>
      </div>
    </div>
  );
}

export default SobreMi;