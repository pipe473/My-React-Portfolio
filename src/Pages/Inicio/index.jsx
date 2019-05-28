import React from 'react';
import './Inicio.scss';
import Footer from '../../Components/Footer/index';

import ScrollAnimation from 'react-animate-on-scroll';


function Inicio(props) {
  return (
    <div className="Inicio">
      <div className="Informacion">
        <ScrollAnimation animateIn="flip" duration="5">
          <p className="nombre">Felipe Bedoya</p>
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;