import React from 'react';
import { Box } from '@chakra-ui/layout';
import ContactoForm from './ContactoForm'
import ContactioMsg from './ContactoMsg'
import './style.css'

export default function Contacto() {

    const colors = {
        color1: "#DB5752",
        color2: "#FAFA88",
        color3: "#9AC9FB",
        color4: "#1A202C"
    }

    return (
        <div>
            <Box m={12} display={{ md: "flex" }} rounded="md" shadow="dark-lg">
                <ContactioMsg colors={colors} />
                <ContactoForm colors={colors} />
            </Box >
        </div>
    )
}