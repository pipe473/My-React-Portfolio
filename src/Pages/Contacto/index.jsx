import React from 'react';
import './Contacto.scss';


class FormApp extends React.Component {
    constructor(args) {
      super(args);
  
      this.state = {
        username: "",
        telefono: "",
        email: "",        
        about: "",       
        message: ""
      };
    }
  
    onChange(event) {
      if (event.target.name === "acept") {
        this.setState({
          [event.target.name]: event.target.checked
        });
      } else {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    }
  
    save(event) {
      if (!this.validate()) {
        return;
      }
  
      this.setState({
        message: "Guardado correctamente"
      });
    }
  
    validate() {
      if (this.state.acept !== true) {
        this.setState({
          message: "Por favor acepte los terminos y condiciones"
        });
  
        return false;
      }
  
      return true;
    }
    render() {
      return (
        <section className="Formulari-contact">
          <form className="Formulario-contacto">
            <div className="nombre-contacto">
              <label htmlFor="username">Nombre y apellidos</label>
              <input
                value={this.state.username}
                onChange={this.onChange.bind(this)}
                name="username"
                id="username"
                type="text"
              />
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                onChange={this.onChange.bind(this)}
                name="email"
                id="email"
                type="text"
              />
  
              <label htmlFor="telefono">Telefono</label>
              <input
                value={this.state.telefono}
                onChange={this.onChange.bind(this)}
                name="telefono"
                id="telefono"
                type="text"
              />
              {/* <label htmlFor="genero" ></label>
          <input 
              type="radio" 
              name="gender" 
              value="w" 
              onChange={this.onChange.bind(this)} 
              />Sra
          <input 
              type="radio"
              name="gender" 
              value="m" 
              onChange={this.onChange.bind(this)} 
          />Sr */}
              {/* <div className="idiomas">
                <select
                  id="languaje"
                  name="languaje"
                  value={this.state.languaje}
                  onChange={this.onChange.bind(this)}
                >
                  <option value="">Seleccione un Idioma</option>
                  <option value="es">Español</option>
                  <option value="en">Ingles</option>
                  <option value="fr">Frances</option>
                  <option value="it">Italiano</option>
                  <option value="de">Aleman</option>
                </select>
              </div> */}
            </div>
  
            <div className="message">
              <label htmlFor="about">Mensaje</label>
              <textarea
                id="about"
                name="about"
                value={this.state.about}
                onChange={this.onChange.bind(this)}
              />
              <div className="condiciones">
                <input
                  id="acept"
                  name="acept"
                  type="checkbox"
                  value={this.state.acept}
                  onChange={this.onChange.bind(this)}
                />
                Acepto terminos y condiciones
              </div>
  
              <div className="boton">
                <button onClick={this.save.bind(this)}>Enviar</button>
                <span>{this.state.message}</span>
              </div>
            </div>
  
            {/* <div>
          <span>{JSON.stringify(this.state)}</span>
          </div> */}
          </form>
        </section>
      );
    }
  }
  
  export default FormApp;