import { useState } from 'react'

import Logo from './components/Logo'
import Heading from './components/Heading'
import Button from './components/Button'
import Modal from './components/Modal'

import './assets/styles/App.css'

function App() {
  const [buttonClass, setbuttonClass] = useState('btn-primary');
  const [buttonText, setButtonText] = useState('Get Started');
  const [modalStatus, setModalStatus] = useState(false);

  function showModal() {
    setModalStatus(true);
  }

  function hideModal() {
    setModalStatus(false);
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
      <Modal closeBtn={hideModal} modalStatus={modalStatus} />
    </>
  )
}

export default App
