import { Center, Link } from '@chakra-ui/layout';
import * as React from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';
import Logo from './../components/layout/Logo';
import LoginForm from './../components/authentication/LoginForm';
import AuthBox from '../components/authentication/AuthBox';

export default function LoginPage() {
  return (
    <Center bg='#FAFBFC' h='100vh' w='full' d='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <AuthBox>
        <VStack h='full' d='flex' justifyContent='space-around' alignItems='center'>
          <Logo />
          <LoginForm />
          <Link fontWeight='medium'>Olvidé mi contraseña</Link>
        </VStack>
      </AuthBox>
      <HStack mt='50px'>
        <Text>¿Necesitas crear una cuenta?</Text>
        <Link fontWeight='medium'>Registrarme</Link>
      </HStack>
    </Center>
  );
}
