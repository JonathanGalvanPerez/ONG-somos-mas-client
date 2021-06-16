import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormLabel, InputGroup, Input, Textarea, Button, VStack, HStack, Box } from '@chakra-ui/react';
import axios from 'axios';
import Alert from '../../alertService/AlertService';
import { API_BASE_URL } from './../../../app/config';
import { useSelector } from 'react-redux';
import { getToken } from './../../../features/login/loginSlice';

export default function CategoriasForm({ data, onClose }) {
    
    const token = useSelector(getToken);
    const editMode = data !== null;
    const initialValues = editMode ?
    {
        name: data.name,
        description: data.description
    }
    : {
        name: '',
        description: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('* El nombre es requerido'),
        description: Yup.string()
    });
    const onSubmit = (values, actions) => {
        const options = {
            'headers': {
                'Authorization': 'Bearer ' + token
            }
        };
        const requestPromise = editMode ?
            axios.patch(`${API_BASE_URL}/categories/${data.id}`, values, options)
            :
            axios.post(`${API_BASE_URL}/categories`, values, options);
        requestPromise.then((result) => {
            actions.setSubmitting(false);
            if(result.data?.success) {
                onClose(true);
                Alert.success('Hecho', editMode ? 'Los cambios ha sido guardados' : 'La categoria ha sido creada');
            } else {
                onClose();
                Alert.error('Ups', 'Hubo un problema. Intente nuevamente más tarde');
            }
        }).catch((error) => {
            actions.setSubmitting(false);
            onClose();
            Alert.error('Ups', 'Hubo un problema. Intente nuevamente más tarde');
        })
    }
    return (
        <Box>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form>
                        <VStack spacing={6}>
                            <Field name='name'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='name'>Nombre</FormLabel>
                                        <InputGroup>
                                            <Input size='lg' borderColor='gray.300' placeholder='Nombre de la categoria' {...field} />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='description'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.description && form.touched.description}>
                                        <FormLabel htmlFor='description'>Descripción</FormLabel>
                                        <InputGroup>
                                            <Textarea size='lg' borderColor='gray.300' placeholder='Ingrese una descripción aquí' {...field} />
                                        </InputGroup>
                                    </FormControl>
                                )}
                            </Field>
                            <HStack mt={4}>
                                <Button colorScheme='teal' isLoading={props.isSubmitting}
                                type='submit'>{editMode? 'Guardar Cambios' : 'Crear Categoria'}</Button>
                                <Button colorScheme='red' onMouseDown={(e) => e.preventDefault()} onClick={onClose}>Cancelar</Button>
                            </HStack>
                        </VStack>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
