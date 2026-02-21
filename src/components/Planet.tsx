import planetNames from "../data/planet-names.js";
import resources from "../data/resources.js";
import {resourceSurvivability} from "../data/resources.js";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type PlanetResult = {
    galaxyOption: string;
    sizeOption: string;
    surfaceOption: string;
}

type PlanetProps = {
    planetResult: PlanetResult;
}

function Planet({planetResult}: PlanetProps) {
    const galaxy = planetResult.galaxyOption;
    const size = planetResult.sizeOption;
    const surface = planetResult.surfaceOption;
    const [discoveredResource, survivability] = generateDiscoveredResource();
    var planetName = '';
    const generatedPlanetName = generatePlanetName();
    var requiredScore = 75;

    function generatePlanetName() {
        planetName = planetNames[Math.floor( Math.random() * planetNames.length )];

        return planetName.charAt(0).toUpperCase() + planetName.slice(1);
    };

    function generateDiscoveredResource(): [keyof typeof resourceSurvivability, number] {
        type ResourceType = keyof typeof resourceSurvivability;
        const resources: ResourceType[] = Object.keys(resourceSurvivability) as ResourceType[];
        
        const randomIndex = Math.floor( Math.random() * resources.length);
        const selectedResource: ResourceType = resources[randomIndex];
        const survivabilityScore = resourceSurvivability[selectedResource];
        
        return [selectedResource, survivabilityScore];
    };

    return (

        <div className="planet-container">
            <div tabIndex={0} id="planet" className={`planet animation--glow ${planetResult ? galaxy + ' ' + size + ' ' + surface : ''}`}></div>
            {planetResult && 
                <div className="planet-results">
                    <h3>Planet Name: <strong>{generatedPlanetName}</strong></h3>
                    <ul>
                        <li><ChevronRightIcon /><strong>Galaxy:&nbsp;</strong> {galaxy.charAt(0).toUpperCase() + galaxy.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Size:&nbsp;</strong> {size.charAt(0).toUpperCase() + size.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Surface:&nbsp;</strong> {surface.charAt(0).toUpperCase() + surface.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Resource:&nbsp;</strong>{discoveredResource}</li>
                        <li><ChevronRightIcon /><strong>Survivability:&nbsp;</strong>{survivability}%</li>
                    </ul>
                    <h3>Possible Resources:</h3>
                    <ul className="possible-resources">
                        {resources.map((resource, index) => <li key={resources[index]} id={resources[index]}>{resource}</li>)}
                    </ul>
                    <h3>Survivablity:</h3>
                    <p>A survivability score of <strong>{requiredScore}%</strong> is required to survive.</p>
                    <p><strong>{generatedPlanetName}'s</strong> abundance of <strong>{discoveredResource}</strong> gives you a <strong>{survivability}%</strong> chance of survival.</p>
                    <p><strong>
                        {
                            discoveredResource === "Fresh Water" ? "Your chance of survival is all but guaranteed!" 
                            : discoveredResource === "Monsters" ? <span className="noLife">You're doomed.</span> 
                            : survivability > requiredScore ? "This planet is viable for life!"
                            : <span className="noLife">Life on this planet is not sustainable.</span>
                        }
                    </strong></p>
                </div>}
        </div>
    )
}

export default Planet;