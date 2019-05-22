import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {

    return (
        <div className="menu">

            <NavLink activeClassName="is-active" to="/">Inicio</NavLink>
            <NavLink activeClassName="is-active" to="/Sobre-mi">Sobre mi</NavLink>
            <NavLink activeClassName="is-active" to="/Conocimientos">Conocimientos</NavLink>
            <NavLink activeClassName="is-active" to="/Contacto">Contacto</NavLink>


        </div>

    );    
}


export default Menu;
