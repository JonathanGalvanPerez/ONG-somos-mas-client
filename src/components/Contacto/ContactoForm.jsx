import React from 'react';
import { Button, Textarea } from "@chakra-ui/react"
import { Box, Center, Stack, Text, VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { EditIcon, EmailIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

export default function ContactoForm({ colors }) {
    const { color2, color3, color4 } = colors

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const onSubmit = values => {
        const formData = values;
        console.log('Form data', formData)
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('* El nombre es requerido'),
        email: Yup.string().email('El email no es válido').required('* El email es requerido'),
        message: Yup.string().required('* El mensaje es requerido')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <VStack width="100%" border="gray.100 solid 1px" bg={color4}>
            <Box width="90%" marginY="12" padding="2.5">
                <form onSubmit={formik.handleSubmit}>
                    <Text fontSize="3xl" align="center" color={color2} fontWeight="bold">Envía un mensaje</Text>
                    <Stack spacing={4} marginTop="12">
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<EditIcon color="gray.300" />}
                            />
                            <Input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                name="name"
                                color={color3}
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
                                placeholder="Email de contacto"
                                color={color3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </InputGroup>
                        {formik.touched.email && formik.errors.email ? (
                            <TextError props={formik.errors.email} />
                        ) : null}

                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Dejanos tu mensaje"
                            resize="none"
                            rows="8"
                            color={color3}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <TextError props={formik.errors.message} />
                        ) : null}

                    </Stack>
                    <Center mt="3">
                        <Button
                            type="submit"
                            color={color4} bg={color3}
                            boxShadow="md"
                            _hover={{ color: color2 }}>
                            Publicar comentario
                        </Button>
                    </Center>
                </form>
            </Box>
        </VStack >
    )

}

