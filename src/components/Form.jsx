import React from 'react'; 
import { useState } from 'react'
import Button from './Button'
import FormOptions from '../subcomponents/FormOptions'
import galaxyOptions from "../data/galaxy-options.js"
import sizeOptions from "../data/size-options.js"
import surfaceOptions from "../data/surface-options.js"

import '../assets/styles/components/Form.scss'

function Form(props) {
    const [buttonClass, setbuttonClass] = useState('btn-secondary');
    const [page, setPage] = useState(1);
    const [formLabel, setFormLabel] = useState('Choose a galaxy');
    const [selected, setSelected] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        galaxyOption: null,
        sizeOption: null,
        surfaceOption: null,
    });
    const optionKey = page === 1 ? "galaxyOption" : page === 2 ? "sizeOption" : "surfaceOption";

    function updateForm(formValue) {
        setSelected(formValue);

        setSelectedOptions(prevOptions => ({
            ...prevOptions, 
            [optionKey]: formValue
        }));
    }

    function formPreviousPage() {
        const prevPage = page - 1;
        setPage(prevPage);
        updateFormLabel(prevPage);

        setSelectedOptions(prevOptions => ({
            ...prevOptions, 
            [optionKey]: null
        }));
    }

    function formNextPage () {

        if (selected) {
            const nextPage = page + 1;
            setPage(nextPage);
            updateFormLabel(nextPage);
            setSelected(null);
        }
    }

    function updateFormLabel(page) {

        switch (page) {
            case 1: 
                setFormLabel('Choose a galaxy')
                break;
            case 2: 
                setFormLabel('Choose a size')
                break;
            case 3: 
                setFormLabel('Choose a surface')
                break;
        }
    }

    function createOption(FormOption) {

        return  (
            <FormOptions
                type="radio"
                key={FormOption.id}
                id={FormOption.id}
                name={FormOption.name}
                value={FormOption.value}
                onChange={() => {updateForm(FormOption.value)}}
                checked={selected === FormOption.value}
                option={FormOption.option}
            />
        )
    }

    function displaySelectedOptions(selectedOption) {
        return <p key={selectedOption}>{selectedOption}</p> 
    }

    function generatePlanet() {
        if (selected) {
            props.generatePlanet(selectedOptions)
            setSelected(null);
            setPage(1);
        }
    }

    return (
        
        <form>
            <label>{formLabel} <span className="asterisk">*</span></label>

            {/* Page 1 */}
            {page === 1 && (
                <>
                    <div className="radio-group">
                        {galaxyOptions.map(createOption)}
                    </div>
                    <div className="button-wrapper">
                        <Button onClick={formNextPage} buttonClass={buttonClass} text="Next"/>
                    </div>
                </>
            )}

            {/* Page 2 */}
            {page === 2 && (
                <>
                    <div className="radio-group">
                        {sizeOptions.map(createOption)}
                    </div>

                    <div className="button-wrapper">
                        <Button onClick={formPreviousPage} buttonClass={buttonClass} buttonDirection="Previous"  text="Previous" />

                        <Button onClick={formNextPage} buttonClass={buttonClass} buttonDirection="Next" text="Next"/>
                    </div>
                </>
            )}

            {/* Page 3 */}
            {page === 3 && (
                <>
                    <div className="radio-group">
                        {surfaceOptions.map(createOption)}
                    </div>

                    <div className="button-wrapper">
                        <Button onClick={formPreviousPage} buttonClass={buttonClass} buttonDirection="Previous"  text="Previous" />

                        <Button onClick={generatePlanet} buttonClass={buttonClass} text="Generate"/>
                    </div>
                </>
            )}

            {/* Page Indicator */}
            <div className="page-wrapper">Page {page}</div>

            {/* Selected Optons */}
            {Object.values(selectedOptions)[0] ? (
                <div className="selectedOptions">
                    {Object.values(selectedOptions).filter(Boolean).map(displaySelectedOptions)}
                </div>
            ) : ""}

            {/* Required Message */}
            <div className="required-message">
                <span>* indicates a required field.</span>
            </div>
        </form>
    )
}

export default Form;