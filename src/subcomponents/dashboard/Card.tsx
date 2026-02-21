type FormOptionsProps = {
    id: string;
    name: string;
    value: string;
    onChange: () => void; 
    checked: boolean;
    option: string;
    type: 'radio' | 'checkbox';
}

function FormOptions({id, name, value, onChange, checked, option}: FormOptionsProps) {

    return (
        <label>
            <input
                type="radio"
                id={id}
                key={id}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                required
            />
            {option}
        </label>
    )
}

export default FormOptions;