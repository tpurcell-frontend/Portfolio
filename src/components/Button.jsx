import { useState } from 'react';
import '../assets/styles/components/Button.css'

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
        <button onClick={() => props.onClick()} className={` ${props.buttonClass} ${reverseButton ? "btn-reverse" : ""} `} type={props.buttonType}>
            {props.text} 
            {buttonDirection()}
        </button>
    )
}

export default Button;