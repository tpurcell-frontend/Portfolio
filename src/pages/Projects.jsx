import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'

import RocketIcon from '@mui/icons-material/Rocket';

function Projects() {
    return (
        <>
            {/* Header */}
            <Header />
                
            <section>
                <div className="custom-container">
                    <h1>This is the Projects page</h1>
                    <h2>
                        <NavLink to="/planet-generator">Planet Generator</NavLink>
                        <RocketIcon className="rocketIcon" />
                    </h2>
                    <p>Check back later for more!</p>
                </div>
            </section>
        </>
    )
}

export default Projects;