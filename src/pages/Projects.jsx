import React from "react";
import { NavLink } from "react-router";

import Header from '../components/Header'

import RocketIcon from '@mui/icons-material/Rocket';

function Projects() {
    return (
        <>
            {/* Header */}
            <Header />
            
            <h1>This is the Projects page</h1>
            <h2>
                <NavLink to="/planet-generator">Planet Generator</NavLink>
                <RocketIcon className="rocketIcon" />
            </h2>
            <h2>Check back later for more!</h2>
        </>
    )
}

export default Projects;