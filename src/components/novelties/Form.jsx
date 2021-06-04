import React from 'react';
import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import Input from './Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


export default function Form() {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        title: '',
        content: '',
        category: ''
    })

    // setData({
    //     title: 'el titulo',
    //     content: 'el contenido',
    //     category: 'la categoria',
    // })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validate = Yup.object({
        title: Yup.string()
            .max(101, 'Maximo de 101 caracteres')
            .required('El titulo es requerido'),
        content: Yup.string()
            .required('El contenido es requerido'),
        category: Yup.string()
            .max(15, 'Maximo de 15 caracteres')
            .required('La categoria es requerida'),

    })
    return (
        <div>
            <>
                <Button onClick={handleShow}>Open Modal</Button>

                <Modal isOpen={show} onClose={handleClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Formulario de Novedades</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Formik
                                initialValues={data}
                                onSubmit={values => {
                                    console.log(values)
                                }}                            >
                                {(props) => (
                                    <Form>
                                        <Input label="title" name="title" type="text" />
                                        <Input label="content" name="content" type="text" />
                                        <Input label="category" name="category" type="text" />
                                        <Button
                                            mt={4}
                                            colorScheme="teal"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>



                        </ModalBody>



                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                CANCELAR
                        </Button>
                            <Button variant="ghost">ENVIAR</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
