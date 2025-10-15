import React from 'react'; 
import Form from './Form.js'
import CloseIcon from '@mui/icons-material/Close';

import '../assets/styles/components/Modal.scss'

import { SelectedOptions } from '../types/SelectedOptions';

type ModalProps = {
    modalStatus: boolean;
    heading: string;
    closeBtn: () => void;
    generatePlanet: (selectedOptions: SelectedOptions) => void; 
}

function Modal({modalStatus, heading, closeBtn, generatePlanet}: ModalProps) {

    return (
            <div className={`${modalStatus === true ? 'showModal' : ''} modal-overlay`}>
                <div id="planet-modal" className="modal-content">
                    <div className="modal-header">
                        <h2>{heading}</h2>
                        <CloseIcon tabIndex={0} className="closeBtn animation-glow" 
                            onClick={closeBtn} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); 
                                    closeBtn();
                                }
                            }}/>
                    </div>
                    <div className="modal-body">
                        <Form generatePlanet={generatePlanet} />
                    </div>
                </div>
            </div>
        )
    }

export default Modal;