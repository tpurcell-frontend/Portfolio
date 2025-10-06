import React from 'react'; 
import '../assets/styles/components/Heading.scss'

function Heading(props) {
    return (
        <div className="heading">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Heading;