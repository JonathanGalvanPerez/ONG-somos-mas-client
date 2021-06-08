import React, { Component,useState,useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import { FormControl, FormErrorMessage, Box, VStack, Button, FormHelperText, FormLabel,Center } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import AuthInput from '../FormActivities/Auth-input';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from "html-react-parser"


export default function FormActivitie(props){

    const [data, setData] = useState(props.data ? props.data : {
        name: '',
        image: '',
        content: ''
    })

    //  console.log(data)

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('* El titulo es requerido'),
        image: Yup.string()
            .required("* El imagen es requerido"),
        content: Yup.string()
            .required('* El contenido no es válido')
    })

    useEffect(() => {
        if(props.type=="edit"){
            console.log('data in path', data);
        }else{
            console.log('data in post', data);
        }
    }, [data])

    const onSubmit = (values) => {
        const { name, image, content } = values;
        setData({
            name,
            image,
            content: parse(content).props.children,
        })
    }
        
        return (
            <Box w='full' >
                <h1>Formulario Actividad </h1>
                <Formik  initialValues={data} onSubmit={onSubmit} validationSchema={validationSchema}>

                {({ handleSubmit, isSubmitting, values, setValues, setFieldValue }) => (

                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <VStack>
                            <FormControl  id="name" isRequired>
                                <FormLabel>Nombre</FormLabel>
                                <AuthInput type="text" name="name"  placeholder="First name" />
                            </FormControl>

                            <FormControl id="imagen" isRequired>
                                <FormLabel>URL imagen</FormLabel>
                                <AuthInput  name="image" placeholder="URL imagen" />
                            </FormControl>

                                <FormControl id="content" isRequired>
                                    <FormLabel>Contenido</FormLabel>
                                    <CKEditor 
                                        name="content"
                                        editor={ClassicEditor}
                                        data={values.content}
                                        onChange={(event, editor) => {
                                        const textEditor = editor.getData();
                                        setValues({ ...values, content: textEditor });
                                    }}
                                    />
                                </FormControl>

                            
                                <Button
                                    mt={4}
                                    colorScheme="teal"
                                    type="submit"
                                    isDisabled={isSubmitting}
                                >Guardar</Button> 
                          

                        </VStack>
                    </Form>
                )}

                </Formik>
            </Box>
        )
}

