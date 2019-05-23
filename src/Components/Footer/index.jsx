import React from 'react';
import './Footer.scss';

            function Footer(props) {
              return (
                <div className="Navegacion">
                  <nav className="Social-Media">
                    <a
                      href="https://github.com/pipe473"
                      target="Github"
                    >
                      <i className="fab fa-github" />
                    </a>
                    <a
                      href="https://twitter.com/FelipeB89757090"
                      target="Twitter">
                      <i className="icons fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/felipe-bedoya-384542181/"
                      target="Linkedin"
                    >
                      <i className="icons fab fa-linkedin" />
                    </a>
                  </nav>
                </div>
              );
            }

            export default Footer;
