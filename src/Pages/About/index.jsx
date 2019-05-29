import React from 'react';
import './About.scss';

import ScrollAnimation from 'react-animate-on-scroll';

function About(props) {
  return (
    <div className="About-me">
      <h1 className="titulo">Sobre mi</h1>
      <ScrollAnimation animateIn="fadeInRightBig" duration="3">
      <p className="parrafo">
        Persona apasionada por la creatividad y el diseño, con interés por las
        nuevas tecnologias y el aprendizaje constante. Con experiencia en el
        diseño industrial y la delineación, habituado al trabajo en equipo y con
        habilidades resolutivas...
      </p>
      </ScrollAnimation>
    </div>
  );
}

export default About;