import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'
import Button from '../components/Button.jsx'

function Home() {

    return (
        <>
            {/* Header */}
            <Header />

            <section className="intro-section">
                {/* Stars Background */}
                <div className="star-background">
                    <div className="stars"></div>
                </div>
                <div className="custom-container">
                    <h1 className="h2">Hello, my name is Travis. </h1>
                    <p>I'm a Front-End Developer with over 6 years of experience crafting responsive, scalable, and functional web applications. I specialize in React.js, modern JavaScript, and CMS platforms like Drupal and WordPress.</p>
                    <p>At my core, I’m a problem-solver and lifelong learner. Whether it’s building custom components, integrating RESTful APIs, or optimizing page performance, I take pride in writing clean, maintainable code that meets both user and business needs.</p>
                </div>
            </section>
            <section className="technology-section">
                <div className="custom-container">
                    <h2 className="h3">Tools & Technologies</h2>
                    <div className="technology-list-wrapper">
                        <div className="technology-list">
                            <h3 className="h4">Languages & Frameworks</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li> 
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Sass</li>
                                <li>Material UI</li>
                            </ul>
                        </div>
                        <div className="technology-list">
                            <h3 className="h4">CMS</h3>
                            <ul>
                                <li>WordPress</li>
                                <li>Drupal</li> 
                            </ul>
                        </div>
                        <div className="technology-list">
                            <h3 className="h4">Platforms & Deployment</h3>
                            <ul>
                                <li>Pantheon</li>
                                <li>Node.js</li> 
                                <li>Git</li>
                                <li>Jira</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                {/* Stars Background */}
                <div className="custom-container">
                    <p>This site is a small showcase of what I can do.</p>
                    <div className="button-wrapper">
                        <NavLink to="planet-generator">
                            <Button buttonclassName="animation-glow btn-homepage" text="Get Started" />
                        </NavLink>
                        <NavLink target="_blank" to="https://www.linkedin.com/in/travis-purcell-97b365174/">
                            <Button buttonclassName="animation-glow btn-homepage" text="Let's Connect" />
                        </NavLink>
                        <NavLink  target="_blank" to="https://github.com/tpurcell-frontend">
                            <Button buttonclassName="animation-glow btn-homepage" text="Code Repos" />
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;