import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import ContactoForm from './ContactoForm';
import ContactoMsg from './ContactoMsg';
import './style.css';


export default function Contacto() {

    return (
        <div>
            <Center>
                <Box mb={5} display={{ md: "flex" }} width={{ base: '90%',  lg: '65%'}} rounded="md" shadow="dark-lg">
                    <ContactoMsg />
                    <ContactoForm />
                </Box >
            </Center>
        </div>
    )
}