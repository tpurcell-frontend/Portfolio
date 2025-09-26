function Planet(props) {
    const galaxy = props.planetResult.galaxyOption;
    const size = props.planetResult.sizeOption;
    const surface = props.planetResult.surfaceOption;

    return (
        <div class="planet-container">
            {props.planetResult ? 
                <div className="planetResults">
                    <h3>Planet Results</h3>
                    <h4>Name: Generated Name</h4>
                    <ul>
                        <li>{galaxy}</li>
                        <li>{size}</li>
                        <li>{surface}</li>
                    </ul>
                </div>
            : ""}
            <div className={`planet animation--glow ${props.planetResult ? galaxy + ' ' + size + ' ' + surface : ''}`}>
            </div>
        </div>
    )
}

export default Planet;