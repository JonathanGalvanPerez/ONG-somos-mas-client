import React, { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button } from '@chakra-ui/react'
import { Formik, Field } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextField } from './TextField';
import * as Yup from 'yup'
import parse from "html-react-parser"
import axios from 'axios';
import { API_BASE_URL } from '../../app/config';

export default function NewsForm(props) {

    const initialValues = props.data ? props.data : {
        title: '',
        content: '',
        category: '',
        image: ''
    }

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

    const sendForm = props.type == 'edit' 
    ? async (data) =>{
         await axios.post(`${API_BASE_URL}/news/`, data);
    } 
    : async (data) =>{
        await axios.patch(`${API_BASE_URL}/news/${props.data.id}`, data);
   } 


    const onSubmit = (values) => {
        console.log(values)
    }
    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >


            {({ handleSubmit, isSubmitting, values, setValues, setFieldValue }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <TextField label="Title" name="title" type="text" />
                    <TextField label="Category" name="category" type="text" />
                    <Field name="image">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.image && form.touched.image}>
                                <FormLabel htmlFor="category">Image</FormLabel>
                                <Input id="image" name="image" type="file" onChange={(event) => {
                                    setFieldValue("image", event.currentTarget.files[0]);
                                }} />                                                    <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <div >
                        <FormLabel htmlFor="content">Content</FormLabel>
                        <CKEditor
                            name="content"
                            editor={ClassicEditor}
                            data={values.content}
                            onChange={(event, editor) => {
                                const textEditor = editor.getData();
                                setValues({ ...values, content: textEditor });
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
                </form>
            )}




        </Formik>
    )
}
