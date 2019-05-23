import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu() {

    return (
        <div className="menu">

            
            <NavLink  className="menu-item" activeClassName="is-active" to="/">Inicio</NavLink>
            <NavLink  className="menu-item" activeClassName="is-active" to="/Sobre-mi">Sobre_Mi</NavLink>
            <NavLink  className="menu-item" activeClassName="is-active" to="/Conocimientos">Conocimientos</NavLink>
            <NavLink  className="menu-item" activeClassName="is-active" to="/Contacto">Cont@cto</NavLink>


        </div>

    );    
}


export default Menu;
