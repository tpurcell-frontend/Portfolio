import React from 'react'; 
import { useState } from 'react';
import '../assets/styles/components/Button.scss'

import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

type ButtonProps = {
    className?: string;
    target?: string;
    rel?: string;
    buttonDirection?: string; 
    to?: string; 
    buttonType?: string; 
    text: string; 
    onClick?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

function Button({className, buttonDirection, to, buttonType, text, onClick, onKeyDown}: ButtonProps) {
    const [reverseButton, setReverseButton] = useState(false);

    function renderIcon() {

        if (buttonDirection == "Previous") {
            setReverseButton(true);
            return <RocketIcon className="rocketIcon" />
        } else {
            return <RocketLaunchIcon className="rocketLaunchIcon" />
        }
    }

    return (
        <a 
            tabIndex={0}
            href={to}
            onClick={() => onClick && onClick()} 
            onKeyDown={(e) => onKeyDown && onKeyDown(e)} 
            className={`btn animation-glow ${reverseButton ? "btn-reverse" : ""} `} 
            type={buttonType} 
        >
            {text} 
            {renderIcon()}
        </a>
    )
}

export default Button;