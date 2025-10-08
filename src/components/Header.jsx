import React from "react";

import '../assets/styles/components/Header.scss'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Header() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header-info">
                            <span><a href="/">Travis Purcell's Portfolio</a></span>
                            <nav>
                                <ul>
                                    <li><a href="/planet-generator">Planet Generator</a></li>
                                    {/* <li><a href="/projects">Projects</a></li> */}
                                    <li><a target="_blank" href="https://www.linkedin.com/in/travis-purcell-97b365174/">LinkedIn</a><ArrowOutwardIcon className="external"/></li>
                                    <li><a target="_blank" href="https://github.com/tpurcell-frontend">Github</a><ArrowOutwardIcon className="external"/></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;