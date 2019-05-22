import React from 'react';
import { NavLink } from 'react-router-dom';


function Inicio (props){

    return(
        <div className="Inicio">

            <div className="Informacion">

            <NavLink activeClassName="is-active" to="/">Inicio</NavLink>
            <NavLink activeClassName="is-active" to="/Sobre-mi">Sobre mi</NavLink>
            <NavLink activeClassName="is-active" to="/Proyectos">Proyectos</NavLink>
            <NavLink activeClassName="is-active" to="/Contacto">Contacto</NavLink>

            </div>
        </div>
        

    );

}


export default Inicio;