function formOptions(props) {

    return (
        <label>
            <input
                type="radio"
                key={props.id}
                name={props.name}
                value={props.value}
                // checked={selected === "milkyway"}
                // onChange={e => setSelected(e.target.value)}
            />
            {props.option}
        </label>
    )
}

export default formOptions;