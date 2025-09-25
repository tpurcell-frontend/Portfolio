import { useState } from 'react'

import Logo from './components/Logo'
import Heading from './components/Heading'
import Button from './components/Button'
import Modal from './components/Modal'

import './assets/styles/App.css'

function App() {
  const [buttonType, setButtonType] = useState('btn-primary');
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
      <Heading />
      <Button onClick={showModal} buttonType={buttonType} text={buttonText} />
      <Modal closeBtn={hideModal} modalStatus={modalStatus} />
    </>
  )
}

export default App
