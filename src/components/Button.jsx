import React from 'react'; 
import { useState } from 'react';
import '../assets/styles/components/Button.scss'

import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Button(props) {
    const [reverseButton, setReverseButton] = useState(false);

    function buttonDirection() {

        if (props.buttonDirection == "Previous") {
            setReverseButton(true);
            return <RocketIcon className="rocketIcon" />
        } else {
            return <RocketLaunchIcon className="rocketLaunchIcon" />
        }
    }

    return (
        <a 
            tabIndex="0"
            href={props.to}
            onClick={() => props.onClick()} 
            onKeyDown={(e) => props.onKeyDown(e)} 
            className={`btn animation-glow ${reverseButton ? "btn-reverse" : ""} `} 
            type={props.buttonType} 
        >
            {props.text} 
            {buttonDirection()}
        </a>
    )
}

export default Button;