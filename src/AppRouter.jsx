import React from 'react';
import Inicio from './Pages/Inicio';
import Layout from './Components/Layout';
import About from './Pages/About';
import Conocimientos from './Pages/Conocimientos';
import Contacto from './Pages/Contacto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function AppRouter () {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={ Inicio } exact/> 
                    <Route path="/Sobre-mi" component={ About } exact/>  
                    <Route path="/Conocimientos" component={ Conocimientos } exact/> 
                    <Route path="/Contacto" component={ Contacto } exact/>        
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRouter;