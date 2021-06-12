import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import ContactoForm from './ContactoForm';
import ContactoMsg from './ContactoMsg';
import AboutUs from './AboutUs';
import './style.css';


export default function Contacto() {

    return (
            <Center d="flex" flexDirection="column">
                <Box mb={5} display={{ md: "flex" }} width={{ base: '90%',  lg: '80%'}} rounded="md">
                    <ContactoMsg />
                    <ContactoForm />
                </Box >
            </Center>
    )
}