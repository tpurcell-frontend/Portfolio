import Form from './Form.jsx'
import CloseIcon from '@mui/icons-material/Close';

import '../assets/styles/components/Modal.css'

function Modal(props) {
    if (!props.modalStatus) return null;

    return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Customize Your Planet</h2>
                        <CloseIcon className="closeBtn animation-glow" onClick={props.closeBtn}/>
                    </div>
                    <div className="modal-body">
                        <Form generatePlanet={props.generatePlanet} />
                    </div>
                </div>
            </div>
        )
    }

export default Modal;