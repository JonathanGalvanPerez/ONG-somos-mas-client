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

export default function RegisterPage() {
  const history = useHistory();

  // On register form submit
  // This callback will only be called after successful validation with the login information
  const handleRegisterSubmit = (values, actions) => {
    // Shape of values: { firstName: string, lastName: string, email: string, password: string }

    // TODO: Sacar este timeout y hacer una llamada al backend
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false); // Set form loading state to false
    }, 1000);
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