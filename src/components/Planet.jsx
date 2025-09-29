import planetNames from "../data/planet-names.js";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Planet(props) {
    const galaxy = props.planetResult.galaxyOption;
    const size = props.planetResult.sizeOption;
    const surface = props.planetResult.surfaceOption;
    var planetName = '';

    function generatePlanetName() {
        planetName = planetNames[Math.floor( Math.random() * planetNames.length )];

        return planetName.charAt().toUpperCase() + planetName.slice(1);
    };

    return (
        <div className="planet-container">
            {props.planetResult ? 
                <div className="planet-results">
                    <h3>Planet Results</h3>
                    <h4>Planet Name: {generatePlanetName()}</h4>
                    <ul>
                        <li><ChevronRightIcon /><strong>Galaxy:&nbsp;</strong> {galaxy.charAt(0).toUpperCase() + galaxy.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Size:&nbsp;</strong> {size.charAt(0).toUpperCase() + size.slice(1)}</li>
                        <li><ChevronRightIcon /><strong>Surface:&nbsp;</strong> {surface.charAt(0).toUpperCase() + surface.slice(1)}</li>
                    </ul>
                </div>
            : ""}
            <div className={`planet animation--glow ${props.planetResult ? galaxy + ' ' + size + ' ' + surface : ''}`}>
            </div>
        </div>
    )
}

export default Planet;