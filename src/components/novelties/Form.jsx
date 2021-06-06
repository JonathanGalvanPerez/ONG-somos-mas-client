import React, { useState } from 'react';
import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function FormNovelties() {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        title: '',
        content: '',
        category: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const validate = Yup.object({
        title: Yup.string()
            .max(101, 'Maximo de 101 caracteres')
            .required('El titulo es requerido'),
        content: Yup.string()
            .required('El contenido es requerido'),
        name: Yup.string()
            .max(15, 'Maximo de 15 caracteres')
            .required('La categoria es requerida'),
    })

    const onSubmit = (values) => {
      setData({
      ...data,
        title: values.title,
        category:values.category
          })
        console.log('data:', data)

    }
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
                                onSubmit={onSubmit} >

                
                                {({ handleSubmit, handleChange }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Field name="title" validate={validate}>
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.title && form.touched.title}>
                                                    <FormLabel htmlFor="title">Title</FormLabel>
                                                    <Input {...field} onChange={handleChange} />
                                                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name="category" validate={validate}>
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.category && form.touched.category}>
                                                    <FormLabel htmlFor="category">Category</FormLabel>
                                                    <Input {...field} onChange={handleChange} />
                                                    <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <div >
                                            <FormLabel htmlFor="content">Content</FormLabel>
                                            <CKEditor
                                                name="content"
                                                editor={ClassicEditor}
                                                data={data.content}
                                                onChange={(event, editor) => {
                                                    const text = editor.getData();
                                                     setData({ ...data, content: text });
                                                onSubmit()
                                                    }}

                                            />
                                        </div>
                                        <Button
                                            mt={4}
                                            colorScheme="teal"
                                            type="submit"
                                        >
                                            Listo
                                         </Button>
                                    </form>
                                )}




                            </Formik>



                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
