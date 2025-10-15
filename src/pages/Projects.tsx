import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'

import RocketIcon from '@mui/icons-material/Rocket';

function Projects() {
    return (
        <>
            { /* Starfield Background */}
            <div className="starfield">
                <div className="stars"></div>
            </div>
            
            {/* Header */}
            <Header />
                
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>This is the Projects page</h1>
                            <h2>
                                <NavLink to="/planet-generator">Planet Generator</NavLink>
                                <RocketIcon className="rocketIcon" />
                            </h2>
                            <p>Check back later for more!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;