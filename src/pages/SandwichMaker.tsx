import React, {useState} from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'

import '../assets/styles/App.scss'
import '../assets/styles/components/Sandwich.scss'

import RocketIcon from '@mui/icons-material/Rocket';

function Projects() {
    const [buttonText, setButtonText] = useState('Launch');
    const [modalStatus, setModalStatus] = useState(false);

    function showModal() {
    }

    return (
        <>
            { /* Starfield Background */}
            <div className="starfield">
                <div className="stars"></div>
            </div>
            
            {/* Header */}
            <Header />
                
           {/* Sandwich Generator */}
            <section className="sandwich-generator">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Heading title="Sandwich Maker" subheading="The Sandwich Maker is an example of React componentization, user input and data manipulation, resulting in the output of flexible and scalable objects. This project is written in TypeScript and uses Cypress testing." />
                            <div className="button-wrapper mt-4">
                                <Button target="_blank" rel="noopener noreferrer" text="See the Code Repo" to="https://github.com/tpurcell-frontend/Portfolio" />
                                <Button onClick={showModal} 
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault(); 
                                            showModal();
                                        }
                                    }}
                                    text={buttonText} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;