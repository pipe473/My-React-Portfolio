import React from 'react';
import './Conocimientos.scss';

function Conocimientos(props) {

    return(

        <div className="programas">

            <div className="row1">

                <a href='#' target="React.JS"><i class="fab fa-react"></i></a>
                <a href='#' target="ANGULAR2"></a><i class="fab fa-angular"></i>
                <a href='#' target="HTML5"></a><i class="fab fa-html5"></i>
                <a href='#' target="CSS3"></a><i class="fab fa-css3-alt"></i>
                <a href='#' target="JS"></a><i class="fab fa-js-square"></i>
            </div>

            <div className="row2">
                <a href='#' target="SASS"></a><i class="fab fa-sass"></i>
                <a href='#' target="NODE.JS"></a><i class="fab fa-node"></i>
                <a href='#' target="BOOTSTRAP"></a><i class="fab fa-bootstrap"></i>
                <a href='#' target="DOCKER"></a><i class="fab fa-docker"></i>
                <a href='#' target="YARN"></a><i class="fab fa-yarn"></i>
            </div>

        </div>
    );    
}

export default Conocimientos;


