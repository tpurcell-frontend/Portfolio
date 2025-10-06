import React from "react";
import Logo from './Logo'
import '../assets/styles/components/Header.scss'

function Header() {

    return (
        <header>
            {/* <Logo /> */}
            <div className="header-info">
                <span><a href="/">Travis Purcell's Portfolio</a></span>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/planet-generator">Planet Generator</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/travis-purcell-97b365174/">LinkedIn</a></li>
                        <li><a target="_blank" href="https://github.com/tpurcell-frontend">Github</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;