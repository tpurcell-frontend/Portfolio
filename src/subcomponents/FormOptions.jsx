import React from 'react'; 

function FormOptions(props) {

    return (
        <label>
            <input
                type="radio"
                id={props.id}
                key={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                checked={props.checked}
                required
            />
            {props.option}
        </label>
    )
}

export default FormOptions;