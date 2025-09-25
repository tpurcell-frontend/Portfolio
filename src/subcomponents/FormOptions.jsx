function formOptions(props) {

    return (
        <label>
            <input
                type="radio"
                key={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                checked={props.checked}
                onClick={props.onClick}
                required
            />
            {props.option}
        </label>
    )
}

export default formOptions;