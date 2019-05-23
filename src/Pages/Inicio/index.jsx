import React from 'react';
import './Inicio.scss';
import Footer from '../../Components/Footer/index';


function Inicio(props) {
  return (
    <div className="Inicio">
      <div className="Informacion">
        <p className="nombre">Felipe Bedoya</p>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;