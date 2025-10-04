import React, {useState} from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Planet from '../components/Planet'

import '../assets/styles/App.css'
import '../assets/styles/components/Planet.css'

function PlanetGenerator() {
    const [buttonClass, setbuttonClass] = useState('btn-primary');
    const [buttonText, setButtonText] = useState('Launch');
    var countdown = 3;
    const [modalStatus, setModalStatus] = useState(false);
    const [planetResult, setPlanetResult] = useState('');

    function showModal() {
        setButtonText('T-minus ' + countdown + '...');

        const countdownTimer = setInterval(() => {
            countdown = countdown - 1;
            setButtonText('T-minus ' + countdown + '...');
            
            if (countdown == 0) {
                setButtonText('Take off!');
                clearInterval(countdownTimer);

                setTimeout(() => {
                    setModalStatus(true);
                    const planetModal = document.getElementById('planet-modal');
                    planetModal.focus();
                }, 1000);
            }
        }, 1000);
    }

    function hideModal(event) {

        // On click
        if (event.key == undefined) {
            setModalStatus(false);
            setButtonText('Launch');
        }

        // On Enter keydown 
        else if ( event.key === 'Enter') {
            setModalStatus(false);
            setButtonText('Launch');
        }
    }

    function generatePlanet(selectedOptions) {
        setButtonText('Launch');
        setModalStatus(false);
        setPlanetResult(selectedOptions);
    }

    return (
        <>
        {/* Header */}
        <Header />

        {/* Stars Background */}
        <div className="star-background">
            <div className="stars"></div>
        </div>

        {/* Planet Generator */}
        <section className="planet-generator">
            <Heading title="Planet Generator" />
            {planetResult ? <p className="tooltip-hint">Hover or tap your planet to view the results.</p> : ""}
            <div className="button-wrapper">
            <Button onClick={showModal} buttonClass={`animation-glow ${buttonClass}`} text={buttonText} />
            </div>
        </section>

        {/* Planet */}
        {planetResult ? 
            <section className="planet-wrapper">
            <Planet planetResult={planetResult} />
            </section>
        : ""}

        {/* Modal */}
        <Modal heading="Customize Your Planet" generatePlanet={generatePlanet} closeBtn={hideModal} modalStatus={modalStatus} />
        </>
    )
}

export default PlanetGenerator;