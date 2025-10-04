import React, {useState} from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'
import Button from '../components/Button.jsx'

function Home() {
    const [buttonText, setButtonText] = useState('Get Started')

    return (
        <>
            {/* Header */}
            <Header />

            <h1 className="h2">Hello, my name is Travis. </h1>
            <p>I'm a Full-Stack Developer, with 6+ years of professional experience.</p>
            <p>I've worked with numerous technologies, including:</p>
            <ul>
                <li>React</li>
                <li>Cypress React Testing</li>
                <li>Material UI</li>
                <li>JavaScript</li>
                <li>WordPress</li>
                <li>Drupal</li>
                <li>Gulp</li>  
                <li>Pantheon</li>
                <li>Node.js</li>
                <li>Foundations</li> 
                <li>Sass.</li>
            </ul>
            <p>My experience includes builds of responsive, scalable and functional web applications built to industries standards.</p>
            <p>This site is a small showcase of what I can do.</p>
            <div className="button-wrapper">
                <NavLink to="planet-generator">
                    <Button buttonClass="animation-glow btn-homepage" text={buttonText} />
                </NavLink>
            </div>
        </>
    )
}

export default Home;