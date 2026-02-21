import { useRef, useState} from 'react'; 
import Button from './Button'
import FormOptions from '../subcomponents/FormOptions'
import galaxyOptions from '../data/galaxy-options'
import sizeOptions from '../data/size-options'
import surfaceOptions from '../data/surface-options'

import '../assets/styles/components/Form.scss'

import { OptionItem } from '../types/OptionItem';

type FormOptionValue = OptionItem;

import { SelectedOptions } from '../types/SelectedOptions';

type OptionKey = keyof SelectedOptions;

type FormProps = {
  generatePlanet: (options: SelectedOptions) => void;
};

function Form({generatePlanet}: FormProps) {
    const [page, setPage] = useState<number>(1);
    const [formLabel, setFormLabel] = useState('Choose a galaxy');
    const [selected, setSelected] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
        galaxyOption: null,
        sizeOption: null,
        surfaceOption: null,
    });
    const formRef = useRef<HTMLFormElement>(null);
    const optionKey: OptionKey = page === 1 ? "galaxyOption" : page === 2 ? "sizeOption" : "surfaceOption";

    function updateForm(formValue: string) {
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

        // Trigger form validation
        if (formRef.current?.reportValidity()) {
            const nextPage = page + 1;
            setPage(nextPage);
            updateFormLabel(nextPage);
            setSelected(null);
        }
    }

    function updateFormLabel(page: number) {

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

    function createOption(FormOption: FormOptionValue) {

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

    function displaySelectedOptions(selectedOption: string) {
        return <p key={selectedOption}>{selectedOption}</p> 
    }

    function handlePlanet() {
        // Trigger form validation
        if (formRef.current?.reportValidity()) {
            generatePlanet(selectedOptions)
            setSelected(null);
            setPage(1);

        
            setTimeout(() => {
                const planet = document.getElementById('planet')            ;
                planet?.focus();

                setSelectedOptions({
                    galaxyOption: null,
                    sizeOption: null,
                    surfaceOption: null,
                })
            }, 250)
        }
    }

    return (
        
        <form ref={formRef}>
            <label>{formLabel} <span className="asterisk">*</span></label>

            {/* Page 1 */}
            {page === 1 && (
                <>
                    <div className="radio-group">
                        {galaxyOptions.map(createOption)}
                    </div>
                    <div className="button-wrapper mt-4">
                        <Button 
                            spaceship={true}
                            onClick={formNextPage}  
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    formNextPage();
                                }
                            }} 
                            text="Next"/>
                    </div>
                </>
            )}

            {/* Page 2 */}
            {page === 2 && (
                <>
                    <div className="radio-group">
                        {sizeOptions.map(createOption)}
                    </div>

                    <div className="button-wrapper mt-4">
                        <Button 
                            spaceship={true}
                            onClick={formPreviousPage} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    formPreviousPage();
                                }
                            }} 
                            buttonDirection="Previous"  
                            text="Previous" />

                        <Button 
                            spaceship={true}
                            onClick={formNextPage} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    formNextPage();
                                }
                            }} 
                            buttonDirection="Next" 
                            text="Next"/>
                    </div>
                </>
            )}

            {/* Page 3 */}
            {page === 3 && (
                <>
                    <div className="radio-group">
                        {surfaceOptions.map(createOption)}
                    </div>

                    <div className="button-wrapper mt-4">
                        <Button 
                            spaceship={true}
                            onClick={formPreviousPage} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    formPreviousPage();
                                }
                            }} 
                            buttonDirection="Previous"  text="Previous" />

                        <Button 
                            spaceship={true}
                            onClick={handlePlanet} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    handlePlanet();
                                }
                            }} 
                            text="Generate"/>
                    </div>
                </>
            )}

            {/* Page Indicator */}
            <div className="page-wrapper">Page {page}</div>

            {/* Selected Optons */}
            {Object.values(selectedOptions)[0] && (
                <div className="selectedOptions">
                    {Object.values(selectedOptions)
                        .filter((val): val is string => typeof val === 'string')
                        .map(displaySelectedOptions)}
                </div>
            )}

            {/* Required Message */}
            <div className="required-message">
                <span>* indicates a required field.</span>
            </div>
        </form>
    )
}

export default Form;