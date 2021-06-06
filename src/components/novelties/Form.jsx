import React, { useEffect, useState } from 'react';
import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik';
import parse from "html-react-parser"
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


    function validate(value) {
        let error
        if (!value) {
          error = "Este campo es requerido"
        } 
        return error
      }


    const onSubmit = (values) => {
      console.log(values)
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
                                onSubmit={onSubmit}
                                
                                >

                
                                {({ handleSubmit, handleChange, isSubmitting, values, setValues }) => (
                                    <Form onSubmit={handleSubmit} encType="multipart/form-data">

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
                                                onChange={ (event, editor) => {
                                                    const textEditor = editor.getData();
                                                     setValues({ ...values, content: parse(textEditor).props.children });
                                                    }}

                                            />
                                        </div>
                                        <Button
                                            mt={4}
                                            colorScheme="teal"
                                            type="submit"
                                            isDisabled={isSubmitting}
                                        >
                                            Listo
                                         </Button>
                                    </Form>
                                )}




                            </Formik>



                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
