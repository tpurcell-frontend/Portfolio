import React from 'react'; 
import '../assets/styles/components/Heading.scss'

function Heading(props) {
    return (
        <div className="heading">
            <h1>{props.title}</h1>
            {props.subheading ? <p className="mt-4 mb-0">{props.subheading}</p>: "" }
        </div>
    )
}

export default Heading;