import React from 'react';
import Inicio from './Pages/Inicio';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


function AppRouter () {
    return (  
        <BrowserRouter>
            {/* <Layout> */}
                <Switch>
                    <Route path="/" component={ Inicio } exact/>     
                </Switch>
            {/* </Layout> */}
        </BrowserRouter>
    );
}

export default AppRouter;