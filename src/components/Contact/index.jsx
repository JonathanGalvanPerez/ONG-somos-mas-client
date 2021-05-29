import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import ContactoForm from './ContactoForm'
import ContactioMsg from './ContactoMsg'
import Logo from './Logo'
import './style.css'


export default function Contacto() {

    return (
        <div>
            <Logo />
            <Center>
                <Box mb={5} display={{ md: "flex" }} width="65%" rounded="md" shadow="dark-lg">
                    <ContactioMsg />
                    <ContactoForm />
                </Box >
            </Center>
        </div>
    )
}