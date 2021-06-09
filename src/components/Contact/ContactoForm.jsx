import React, { useState } from 'react';
import { Button, Textarea } from "@chakra-ui/react"
import { Box, Center, Stack, Text, VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { EditIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import axios from 'axios';
import { API_BASE_URL } from '../../app/config';
import Alert from '../alertService/AlertService';
import Loader from '../Loading/Loader';


export default function ContactoForm() {
    const [ isLoading, setLoading ] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const onSubmit = values => {
        const formData = values;
        console.log('Form data', formData)
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('* El nombre es requerido'),
        email: Yup.string().email('El email no es válido').required('* El email es requerido'),
        phone: Yup.number(),
        message: Yup.string()
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <VStack width="100%" border="gray.100 solid 1px" >
            <Loader isLoading={isLoading} />

            <Box width="90%" marginY="1" padding="2.5">

                <form onSubmit={formik.handleSubmit}>
                    <Text fontSize="3xl" align="center" mt={2} mb={2} fontWeight="bold">Envía un mensaje</Text>
                    <Stack spacing={4} >

                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<EditIcon color="gray.300" />}
                            />
                            <Input
                                type="text"
                                placeholder="*Nombre"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                        </InputGroup>
                        {formik.touched.name && formik.errors.name ? (
                            <TextError props={formik.errors.name} />
                        ) : null}

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<EmailIcon color="gray.300" />}
                            />
                            <Input type="email"
                                id="email"
                                name="email"
                                placeholder="*Email de contacto"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </InputGroup>
                        {formik.touched.email && formik.errors.email ? (
                            <TextError props={formik.errors.email} />
                        ) : null}

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<PhoneIcon color="gray.300" />}
                            />
                            <Input type="number"
                                id="phone"
                                name="phone"
                                placeholder="Número de teléfono"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                        </InputGroup>

                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Dejanos tu mensaje"
                            resize="none"
                            rows="8"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />

                    </Stack>
                    <Center mt="3">
                        <Button
                            type="submit"

                            borderRadius='full'
                            size='md'
                            mt={4}
                            py={6}
                            color="white"
                            bg="gray.700"
                            fontSize='lg'
                            boxShadow="md"
                            _hover={{ bg: 'gray.900' }}
                        >
                            Contactarse
                        </Button>
                    </Center>
                </form>
            </Box>
        </VStack >
    )

}

