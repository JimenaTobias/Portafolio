import { React, useEffect } from 'react';
import './Contacto.css';
import { useForm } from 'react-hook-form';

function Contacto() {

  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  useEffect(() => {
    document.body.className = 'contacto';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className='contacto-container'>
      <h1 className='titulo-contacto'>📱 Formulario de Contacto 📱</h1>
      <p>Puedes ponerte en contacto conmigo por:<br></br>
      ↳⭐ Correo Electrónico: mtobiasv1@miumg.edu.gt <br></br>
      ↳⭐ Número de Celular: +502 3034 2282
        </p>
      <p>De igual modo, aquí podrás encontrar un formulario que puedes rellenar con tus datos necesarios.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='form-react'>
          <div className='form-control'>
            <label>Nombre Completo: </label>
            <input type='text' {...register('nombre', {
              required: true
            })} />
            { errors.nombre?.type === 'required' && <label>El campo nombre es requerido.</label> }
          </div>

          <div className='form-control'>
            <label>Correo Electrónico: </label>
            <input type='text' {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}/>
            { errors.email?.type === 'pattern' && <label>El formato del correo es incorrecto.</label>}
            { errors.email?.type === 'required' && <label>El campo correo es requerido.</label> }
          </div>

            <div  className='form-control'>
              <label>Número Telefónico: </label>
              <input type='text' {...register('telefono', {
                required: true
              })}/>
              { errors.telefono?.type === 'required' && <label>El campo teléfono es requerido.</label> }
          </div>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  );
}

export default Contacto;