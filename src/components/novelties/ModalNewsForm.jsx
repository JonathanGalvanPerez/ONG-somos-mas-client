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

                <Modal isOpen={show} onClose={handleClose} size='full'  >
                    <ModalOverlay />
                    <ModalContent h="max-content" bg="teal.100" w={{ base: "95%", lg: "80%" }}>
                        <ModalHeader textAlign="center" as="ins" fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>Formulario de Novedades</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <NewsForm data={props.data} type={props.type}/>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
