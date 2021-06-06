import React, { useState } from 'react';
import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import NewsForm from './NewsForm'
export default function ModalNewsForm(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button onClick={handleShow}>{props.label}</Button>

                <Modal isOpen={show} onClose={handleClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Formulario de Novedades</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <NewsForm data={props.data}/>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
