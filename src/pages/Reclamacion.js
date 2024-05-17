import '../App.css';

function Reclamacion() {
  return (
    <div className='form_container_contact'>    
      <div className='form_header'>
        <h1 className='form_title'>
          Libro de Reclamaciones
        </h1>
      </div>
      <div className='form_body'>
        <div className='form'>
          <label className='form_label'>
            Nombres y Apellidos:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
              id="nombre_apellidos"
              name='nombre_apellidos'>
              </input>
            </i>
          </div>
        </div>
        <div className='form'>
          <label className='form_label'>
            Correo:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
              id="describir_pregunta"
              name='describir_pregunta'>
              </input>
            </i>
          </div>
        </div>
        <div className='form'>
          <label className='form_label'>
            Telefono:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
              id="correo"
              name='correo'>
              </input>
            </i>
          </div>
        </div>
        <div className='form'>
          <label className='form_label'>
            DNI:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
              id="correo"
              name='correo'>
              </input>
            </i>
          </div>
        </div>
        <div className='form'>
          <label className='form_label'>
            Direccion:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
              id="direccion"
              name='direccion'>
              </input>
            </i>
          </div>
        </div>
        <div className='form'>
            <button>Enviar</button>          
        </div>
      </div>
    </div>    
  );
}

export default Reclamacion;
