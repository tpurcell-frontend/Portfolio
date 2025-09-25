import { useState } from 'react'
import Button from './Button'
import FormOptions from '../subcomponents/FormOptions'
import galaxyOptions from "../data/galaxy-options.js"
import sizeOptions from "../data/size-options.js"
import surfaceOptions from "../data/surface-options.js"

import '../assets/styles/components/Form.css'

function Form() {
    const [buttonClass, setbuttonClass] = useState('btn-secondary');
    const [buttonText, setButtonText] = useState('Next');
    const [page, setPage] = useState(1);
    const [formLabel, setFormLabel] = useState('Choose a galaxy');
    const [selected, setSelected] = useState('');

    function formNextPage () {
        const nextPage = page + 1;
        setPage(nextPage);
        updateFormLabel(nextPage);
    }

    function formPreviousPage() {
        const prevPage = page - 1;
        setPage(prevPage);
        updateFormLabel(prevPage);
    }

    function updateFormLabel(page) {

        switch (page) {
            case 1: 
                setFormLabel('Choose a galaxy:')
                break;
            case 2: 
                setFormLabel('Choose a size:')
                break;
            case 3: 
                setFormLabel('Choose a surface:')
                break;
        }
    }

    function createOption(galaxyOption) {

        return  (
            <FormOptions
                type="radio"
                id={galaxyOption.id}
                name={galaxyOption.name}
                value={galaxyOption.value}
                // checked={selected === "milkyway"}
                // onChange={e => setSelected(e.target.value)}
                option={galaxyOption.option}
            />
        )
    }

    function generatePlanet() {
        console.log('Generating planet');
    }

    return (
           <form>
               <label>{formLabel}</label>
                {page === 1 && (
                    <>
                        <div className="radio-group">
                            {galaxyOptions.map(createOption)}
                        </div>
                        <div className="button-wrapper">
                            <Button onClick={formNextPage} buttonClass={buttonClass} text="Next" />
                        </div>
                    </>
                )}
                {page === 2 && (
                    <>
                        <div className="radio-group">
                            {sizeOptions.map(createOption)}
                        </div>

                        <div className="button-wrapper">
                            <Button onClick={formPreviousPage} buttonClass={buttonClass} buttonDirection="Previous"  text="Previous" />

                            <Button onClick={formNextPage} buttonClass={buttonClass} buttonDirection="Next" text="Next" />
                        </div>
                    </>
                )}
                {page === 3 && (
                    <>
                        <div className="radio-group">
                            {surfaceOptions.map(createOption)}
                        </div>

                        <div className="button-wrapper">
                            <Button onClick={formPreviousPage} buttonClass={buttonClass} buttonDirection="Previous"  text="Previous" />

                            <Button onClick={generatePlanet} buttonClass={buttonClass} buttonDirection="Generate" text="Generate" buttonType="button" />
                        </div>
                    </>
                )}

                <div className="page-wrapper">Page {page}</div>
            </form>
        )
    }

export default Form;