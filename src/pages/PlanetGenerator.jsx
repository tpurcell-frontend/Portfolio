import React, {useState} from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Planet from '../components/Planet'

import '../assets/styles/App.scss'
import '../assets/styles/components/Planet.scss'

function PlanetGenerator() {
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
                setButtonText('Blast off!');
                clearInterval(countdownTimer);

                setTimeout(() => {
                    setModalStatus(true);
                    const planetModal = document.getElementById('planet-modal');
                    planetModal.focus();
                }, 250);
            }
        }, 250);
    }

    function hideModal() {
        setModalStatus(false);
        setButtonText('Launch');
    }

    function generatePlanet(selectedOptions) {
        setButtonText('Launch');
        setModalStatus(false);
        setPlanetResult(selectedOptions);
    }

    return (
        <>
            { /* Starfield Background */}
            <div className="starfield">
                <div className="stars"></div>
            </div>
            
            {/* Header */}
            <Header />

            {/* Sun Background */}
            <div className="sun-wrapper mt-5">
                <div className="sun"></div>
            </div>

            {/* Planet Generator */}
            <section className="planet-generator">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Heading title="Planet Generator" subheading=" The Planet Generator is an example of React componentization, user input and data manipulation, resulting in the output of flexible and scalable objects." />
                            {planetResult ? <p className="tooltip-hint mt-4 mb-0">Hover, tap or focus your planet to view the results.</p> : ""}
                            <div className="button-wrapper mt-4">
                                <Button onClick={showModal} 
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault(); 
                                                showModal();
                                            }
                                        }}
                                        text={buttonText} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planet */}
            {planetResult ? 
                <section className="planet-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Planet planetResult={planetResult} />
                            </div>
                        </div>
                    </div>
                </section>
            : ""}

            {/* Modal */}
            <Modal heading="Customize Your Planet" generatePlanet={generatePlanet} 
                    closeBtn={hideModal} 
                    modalStatus={modalStatus} />
        </>
    )
}

export default PlanetGenerator;