import React from 'react'; 
import planetNames from "../data/planet-names.js";
import resources from "../data/resources.js";
import {resourceSurvivability} from "../data/resources.js";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Planet(props) {
    const galaxy = props.planetResult.galaxyOption;
    const size = props.planetResult.sizeOption;
    const surface = props.planetResult.surfaceOption;
    const [discoveredResource, survivability] = generateDiscoveredResource();
    var planetName = '';
    var requiredScore = 75;

    function generatePlanetName() {
        planetName = planetNames[Math.floor( Math.random() * planetNames.length )];

        return planetName.charAt().toUpperCase() + planetName.slice(1);
    };

    function generateDiscoveredResource() {
        const randomIndex = Math.floor( Math.random() * resources.length);
        const selectedResource = resources[randomIndex];
        const survivabilityScore = resourceSurvivability[selectedResource];
        
        return [selectedResource, survivabilityScore];
    };

    return (

        <div className="planet-container">
            <div className={`planet animation--glow ${props.planetResult ? galaxy + ' ' + size + ' ' + surface : ''}`}></div>
            {props.planetResult ? 
                <div className="planet-results">
                    <h3>Planet Name: {generatePlanetName()}</h3>
                    <ul>
                        <li><ChevronRightIcon /><strong>Galaxy:&nbsp;</strong> {galaxy.charAt(0).toUpperCase() + galaxy.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Size:&nbsp;</strong> {size.charAt(0).toUpperCase() + size.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Surface:&nbsp;</strong> {surface.charAt(0).toUpperCase() + surface.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Resource:&nbsp;</strong>{discoveredResource}</li>
                        <li><ChevronRightIcon /><strong>Survivability:&nbsp;</strong>{survivability}%</li>
                    </ul>
                    <h3>Possible Resources:</h3>
                    <ul className="possible-resources">
                        {resources.map((resource) => <li>{resource}</li>)}
                    </ul>
                    <h3>Survivablity:</h3>
                    <p>A survivability score of {requiredScore}% is required to survive.</p>
                    <p>Your score is: {survivability}%.</p>
                    <p>{survivability > requiredScore ?
                    "This planet is viable for life!"
                    : "Life on this planet is not sustainable."}</p>
                </div>
            : ""}
        </div>
    )
}

export default Planet;