import React from "react";
import Logo from './Logo'
import '../assets/styles/components/Header.css'

function Header() {

    return (
        <header>
            {/* <Logo /> */}
            <div className="header-info">
                <span><a href="/">Travis Purcell's Portfolio</a></span>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/https://github.com/tpurcell-frontend">Github</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;