import React from 'react'; 
import Form from './Form.jsx'
import CloseIcon from '@mui/icons-material/Close';

import '../assets/styles/components/Modal.css'

function Modal(props) {

    return (
            <div className={`${props.modalStatus === true ? 'showModal' : ''} modal-overlay`}>
                <div id="planet-modal" className="modal-content">
                    <div className="modal-header">
                        <h2>{props.heading}</h2>
                        <CloseIcon tabIndex="0" className="closeBtn animation-glow" onClick={props.closeBtn} onKeyDown={props.closeBtn}/>
                    </div>
                    <div className="modal-body">
                        <Form generatePlanet={props.generatePlanet} />
                    </div>
                </div>
            </div>
        )
    }

export default Modal;