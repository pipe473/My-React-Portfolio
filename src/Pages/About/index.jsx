import React from 'react';
import './About.scss';

import ScrollAnimation from 'react-animate-on-scroll';

function About(props) {
  return (
    <div className="About-me">
      <h1 className="titulo">Sobre mi</h1>
      <ScrollAnimation animateIn="fadeInRightBig" duration="2">
      <p className="parrafo1">
        Apasionado por la creatividad y el diseño,
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRightBig" duration="3">
        <p className="parrafo2">
        con interés por las nuevas tecnologias y el aprendizaje constante. 
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRightBig" duration="4">
        <p className="parrafo3">
        Con experiencia en el diseño industrial y la delineación,
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRightBig" duration="5">
        <p className="parrafo4">
        habituado al trabajo en equipo y con habilidades resolutivas...
      </p>
      </ScrollAnimation>
    </div>
  );
}

export default About;