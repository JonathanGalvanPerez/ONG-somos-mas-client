/*
  Register Page

  Contains components/authentication/RegisterForm

  Important function:
    handleRegisterSubmit - will be called on register form submit after input validation
*/

import { Center, Link } from '@chakra-ui/layout';
import * as React from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';
import Logo from '../components/layout/Logo';
import RegisterForm from '../components/authentication/RegisterForm';
import AuthBox from '../components/authentication/AuthBox';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function RegisterPage() 
{
  const history = useHistory();

  // On register form submit
  // This callback will only be called after successful validation with the login information
  const handleRegisterSubmit = (values, actions) => {
    // Shape of values: { firstName: string, lastName: string, email: string, password: string }

    axios.post("http://localhost:3005/users/auth/register", values).then((result) => {
      if (result.data.errors) {
        // El backend nos respondio con un error
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error',
          icon: 'error',
          confirmButtonText: 'OK'
        })

        actions.setSubmitting(false); // Desactiva el icono de cargando del boton
        return;
      }
      else {
        // Registro exitoso
        history.push("/"); // Redirecciona a home
      }
    }).catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error',
        icon: 'error',
        confirmButtonText: 'OK'
      });

      actions.setSubmitting(false); 
    });
};

  // On logo click
  const handleLogoClick = () => {
    history.push('/');
  };

  return (
    <Center
      h={{ base: '100%', md: '100vh' }}
      bg='#F5F6F9'
      w='100%'
      d='flex'
      position='relative'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      {/* Logo */}
      <Logo onClick={handleLogoClick} cursor='pointer' mb='35px' mt={{ base: '50px', md: '0px' }} />

      {/* Box */}
      <AuthBox maxW='md' position='relative'>
        <VStack
          w={{ base: '90%', sm: '80%' }}
          d='flex'
          alignItems='center'
          spacing={3}
          justifyContent='center'
          textAlign='center'>
          {/* Box header */}
          <Text fontSize='4xl' fontWeight='medium'>
            Registrarme
          </Text>

          <Text fontSize="smaller">Rellena con tus datos para crear una nueva cuenta</Text>

          <div/>

          {/* Form */}
          <RegisterForm onRegisterSubmit={handleRegisterSubmit} />

        </VStack>
      </AuthBox>

      {/* Bottom text */}
      <HStack mt='40px' mb="20px">
        <Text>¿Ya tienes una cuenta?</Text>
        <Link as={RouterLink} to='/acceso' fontWeight='medium'>
          Iniciar sesión
        </Link>
      </HStack>
    </Center>
  );
}
