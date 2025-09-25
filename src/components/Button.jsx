import { useState } from 'react'
import '../assets/styles/components/Button.css'

function Button(props) {
    // const [buttonType, setButtonType] = useState('btn-primary');

    return (
        <button onClick={() => props.onClick()} className={props.buttonType}>{props.text}</button>
    )
}

export default Button;