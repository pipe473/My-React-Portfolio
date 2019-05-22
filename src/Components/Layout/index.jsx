import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

function Layout(props) {

    return (
  <div className="Menu">
   
      <Menu />
        {props.children}


        <Footer />
   
  </div>

    );
}

export default Layout;