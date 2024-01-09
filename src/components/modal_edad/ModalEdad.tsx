import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


export function ModalEdad() {
    const [show, setShow] = useState(true);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShowSecondModal(true);
    };
    const handleConfirm = () => {
        alert('Le damos la bienvenida a nuestro lugar, salud!!🍺');
        setShow(false);
    };
    const handleCloseTab = () => {
        setShowSecondModal(false);
        window.location.href = 'https://www.google.com';
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Advertencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Eres mayor de 18 años?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConfirm}>
                        Si
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecondModal} onHide={handleCloseTab}>
                <Modal.Header closeButton>
                    <Modal.Title>Lo siento</Modal.Title>
                </Modal.Header>
                <Modal.Body>No puedes entrar a la página web.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseTab}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalEdad;