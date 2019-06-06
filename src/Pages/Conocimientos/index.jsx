import React from 'react';
import './Conocimientos.scss';

import ScrollAnimation from 'react-animate-on-scroll';

function Conocimientos(props) {

    return(

        <div className="programas">

            <h1>Conocimientos</h1>
            <ScrollAnimation animateIn="bounceInDown" duration="2">
                <div className="column1">
                    <a className="item" href='#' target="SASS"></a><i class="fab fa-sass"></i>
                    <a className="item" href='#' target="NODE.JS"></a><i class="fab fa-node"></i>
                    <a className="item" href='#' target="BOOTSTRAP"></a><i class="fab fa-bootstrap"></i>
                    <a className="item" href='#' target="HTML5"></a><i class="fab fa-html5"></i>
                    <a className="item" href='#' target="CSS3"></a><i class="fab fa-css3-alt"></i>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInUp" duration="3">
                <div className="column2">
                    <a className="item" href='#' target="React.JS"></a><i class="fab fa-react"></i>
                    <a className="item" href='#' target="YARN"></a><i class="fab fa-yarn"></i>
                    <a className="item" href='#' target="ANGULAR2"></a><i class="fab fa-angular"></i>               
                    <a className="item" href='#' target="JS"></a><i class="fab fa-js-square"></i>
                    <a className="item" href='#' target="DOCKER"></a><i class="fab fa-docker">...</i> 
                </div>    
                </ScrollAnimation>        
            </div>
    );    
}

export default Conocimientos;




