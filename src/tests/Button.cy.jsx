import React, {useState} from "react";
import Button from "../components/Button";
import '../assets/styles/components/Button.css'

describe('<Button />', () => {

    it('Open a modal', () => {
        function TestComponent() {
            const [modalStatus, setModalStatus] = useState(false);
            const [buttonText, setButtonText] = useState('Old Button Text');
            const [buttonClass, setButtonClass] = useState('Old Button Class');


            function showModal() {
                setModalStatus(true);
                setButtonText('New Button Text');
                setButtonClass('New Button Class');
            }

            return (
                <Button
                    onClick={() => {showModal()}}
                    buttonClass={buttonClass + (modalStatus ? ' showModal' : '')}
                    text={buttonText}
                /> 
            );
        }

        cy.mount(<TestComponent />)

        cy.contains('Old Button Text')
            .should('exist')
            .should('have.class', 'Old Button Class')
            .click();

        cy.contains('New Button Text')
            .should('exist')
            .should('have.class', 'New Button Class showModal');
    });

    it('Advance the page', () => {
        function TestComponent() {
            const [page, setPage] = useState(1);
            const [selected, setSelected] = useState('Starting value');

            function turnPage () {
                const nextPage = page + 1;
                setPage(nextPage);
                setSelected(null);
            }

            return (
                <Button
                    onClick={() => {turnPage()}}
                    text={selected === null ? 'Null' : 'Starting value'}
                    buttonClass={page === 2 ? 'SamePage' : 'Starting class'}
                /> 
            )
        }

        cy.mount(<TestComponent />)

        cy.contains('Starting value')
            .should('have.class', 'Starting class')
            .click();

        cy.contains('Null')
            .should('exist')
            .should('have.class', 'SamePage');
    });

    it('Update the Form Label', () => {
        
        function TestComponent() {
            const [formLabel, setFormLabel] = useState('Choose a galaxy');
            const [page, setPage] = useState(1);

            function updateFormLabel(input) {

                switch (input) {
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

            function handleClick() {
                const nextPage = page + 1;
                setPage(nextPage);
                updateFormLabel(nextPage);
            }

            return (
                <Button
                    onClick={() => {handleClick()}}
                    text={formLabel}
                /> 
            )
        }

        cy.mount(<TestComponent />)
        
        cy.contains('Choose a galaxy')
            .click();

        cy.contains('Choose a size')
            .click();

        cy.contains('Choose a surface');
    })
});
