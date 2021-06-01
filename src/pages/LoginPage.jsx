/*
  Login Page

  Contains components/authentication/LoginForm

  Important function:
    handleLoginSubmit - will be called on login form submit after input validation
*/

import { Center, Link } from '@chakra-ui/layout';
import * as React from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';
import Logo from './../components/layout/Logo';
import LoginForm from './../components/authentication/LoginForm';
import AuthBox from '../components/authentication/AuthBox';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios'; 
import Swal from 'sweetalert2';

export default function LoginPage() {
  const history = useHistory();

  // On login form submit
  // This callback will only be called after successful validation with the login information
  const handleLoginSubmit = (values, actions) => {
    // Shape of values: { email: string, password: string }

    // TODO: Sacar este timeout y hacer una llamada al backend
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   actions.setSubmitting(false); // Set form loading state to false
    // }, 1000);

    axios.post("http://localhost:3005/users/auth/login", values).then((result) => {
      if (result.data.ok) {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error',
          icon: 'error',
          confirmButtonText: 'OK'
        })

        actions.setSubmitting(false); 
        return;
      }
      else {
        history.push("/"); 
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
      h={{ base: '100vh', md: '100vh' }}
      bg='#F5F6F9'
      w='100%'
      d='flex'
      position='relative'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      {/* Logo */}
      <Logo onClick={handleLogoClick} cursor='pointer' mb='35px' mt={{ base: '35px', md: '0px' }} />

      {/* Box */}
      <AuthBox maxW='md' position='relative'>
        <VStack
          w={{ base: '90%', sm: '80%' }}
          d='flex'
          alignItems='center'
          spacing={5}
          justifyContent='center'
          textAlign='center'>
          {/* Box header */}
          <Text fontSize='4xl' fontWeight='medium'>
            Iniciar sesión
          </Text>

          {/* Form */}
          <LoginForm onLoginSubmit={handleLoginSubmit} />

          {/* Box footer */}
          <Link as={RouterLink} to='/recuperar-contraseña' fontWeight='medium'>
            Olvidé mi contraseña
          </Link>
        </VStack>
      </AuthBox>

      {/* Bottom text */}
      <HStack mt='40px' mb={{ base: '0px', md: '100px' }}>
        <Text>¿Necesitas crear una cuenta?</Text>
        <Link as={RouterLink} to='/registro' fontWeight='medium'>
          Registrarme
        </Link>
      </HStack>
    </Center>
  );
}
