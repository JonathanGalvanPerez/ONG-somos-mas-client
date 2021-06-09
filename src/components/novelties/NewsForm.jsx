import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, Center, Box } from '@chakra-ui/react'
import { Formik, Field } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextField } from './TextField';
import * as Yup from 'yup'
import parse from "html-react-parser"
// import axios from 'axios';
// import { API_BASE_URL } from '../../app/config';

export default function NewsForm(props) {

    console.log(props.type)

    const [data, setData] = useState(props.data ? props.data : {
        title: '',
        content: '',
        category: '',
        image: ''
    })
    
    const validationSchema = Yup.object({
        title: Yup.string()
            .required('* El titulo es requerido'),
        image: Yup.mixed()
            .required("* El imagen es requerido"),
        category: Yup.string()
            .required('* La categoria es requerido'),
        content: Yup.string()
            .required('* El contenido no es válido')
    })

    useEffect(() => {
        if(props.type==="edit"){
            console.log('data in path', data);
        }else{
            console.log('data in post', data);
        }
    }, [data])


    const onSubmit = (values) => {
        console.log(values)
        const { title, category, content, image } = values;
        setData({
            title,
            category,
            content: parse(content).props.children,
            image
        })
    }


    return (
        <Center  >
            <Box w={{ base: "100%", lg: "85%" }} bg="gray.100" p="5" borderRadius="lg" >
                <Formik
                    initialValues={data}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >

                    {({ handleSubmit, isSubmitting, values, setValues, setFieldValue }) => (
                        <form onSubmit={handleSubmit} encType="multipart/form-data">

                            <TextField label="Title" name="title" type="text" />
                            <TextField label="Category" name="category" type="text" />
                            <Field name="image">
                                {({ form }) => (
                                    <FormControl isInvalid={form.errors.image && form.touched.image}>
                                        <FormLabel as="samp" fontSize="xl" htmlFor="category">Image: </FormLabel>
                                        <Input id="image" name="image" type="file" onChange={(event) => {
                                            setFieldValue("image", event.currentTarget.files[0]);
                                        }} />
                                        <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Box >
                                <FormLabel as="samp" fontSize="xl" htmlFor="content">Content: </FormLabel>
                                <CKEditor
                                    name="content"
                                    editor={ClassicEditor}
                                    data={values.content}
                                    onChange={(event, editor) => {
                                        const textEditor = editor.getData();
                                        setValues({ ...values, content: textEditor });
                                    }}

                                />
                            </Box>
                            <Center>
                                <Button
                                    mt={4}
                                    w={{ base: "70%", md: "50%", lg: "40%", xl: '30%' }}
                                    colorScheme="teal"
                                    type="submit"
                                    isDisabled={isSubmitting}
                                >Guardar</Button>
                            </Center>
                        </form>
                    )}




                </Formik>
            </Box>
        </Center>
    )
}
