import React from "react";

import '../assets/styles/components/Header.scss'
import '../assets/styles/components/Menu.scss'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Header() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header-info">
                            <span><a href="/">Travis Purcell's Portfolio</a></span>
                            <nav className="menu">
                                <ul>
                                    <li>
                                        <a href="#">Projects</a>
                                        <ul className="menu-dropdown">
                                            <li><a href="/projects/dashboard">Dashboard</a></li>
                                            <li><a href="/projects/planet-generator">Planet Generator</a></li>
                                            {/* <li><a href="/projects/sandwich-maker">Sandwich Maker</a></li> */}
                                            <li><a href="/projects/todo-list">ToDo List</a></li>
                                        </ul>
                                    </li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="mailto:travis.n.purcell@gmail.com">Email</a><ArrowOutwardIcon className="external"/></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/travis-purcell-97b365174/">LinkedIn</a><ArrowOutwardIcon className="external"/></li>
                                    <li><a target="_blank"  href="https://github.com/tpurcell-frontend">Github</a><ArrowOutwardIcon className="external"/></li>
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