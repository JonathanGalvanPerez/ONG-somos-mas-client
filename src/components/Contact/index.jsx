import React from 'react';
import { Box, Center } from '@chakra-ui/layout';
import ContactoForm from './ContactoForm';
import ContactoMsg from './ContactoMsg';
import AboutUs from './AboutUs';
import './style.css';

export default function Contacto() {
  return (
    <Center d='flex' flexDirection='column' py={12} >
      <Box mb={5} display={{ md: 'flex' }} border="1px" shadow="sm" borderColor="gray.100" py={12} width={{ base: '90%', lg: '75%' }} rounded='xl'>
        <ContactoMsg />
        <ContactoForm />
      </Box>
    </Center>
  );
}
