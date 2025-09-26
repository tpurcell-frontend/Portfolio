import { useState } from 'react'

import Logo from './components/Logo'
import Heading from './components/Heading'
import Button from './components/Button'
import Modal from './components/Modal'
import Planet from './components/Planet'

import './assets/styles/App.css'
import './assets/styles/components/Planet.css'

function App() {
  const [buttonClass, setbuttonClass] = useState('btn-primary');
  const [buttonText, setButtonText] = useState('Get Started');
  const [modalStatus, setModalStatus] = useState(false);
  const [planetResult, setPlanetResult] = useState("");

  function showModal() {
    setModalStatus(true);
  }

  function hideModal() {
    setModalStatus(false);
  }

  function generatePlanet(selectedOptions) {
    console.log(selectedOptions);
    console.log('Generating planet');
    setModalStatus(false);
    setPlanetResult(selectedOptions);
  }

  return (
    <>
      <Logo />
      <section className="planet-generator">
        <Heading />
        <div className="button-wrapper">
          <Button onClick={showModal} buttonClass={`animation-glow ${buttonClass}`} text={buttonText} />
        </div>
      </section>
      <section className="planet-wrapper">
        <Planet planetResult={planetResult} />
      </section>
      <Modal generatePlanet={generatePlanet} closeBtn={hideModal} modalStatus={modalStatus} />
    </>
  )
}

export default App
