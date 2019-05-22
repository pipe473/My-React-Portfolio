import React from 'react';
import Inicio from './Pages/Inicio';
import Layout from './Components/Layout';
import About from './Pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Conocimientos from './Pages/Conocimientos';


function AppRouter () {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={ Inicio } exact/> 
                    <Route path="/Sobre-mi" component={ About } exact/>  
                    <Route path="/Conocimientos" component={ Conocimientos } exact/>      
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRouter;