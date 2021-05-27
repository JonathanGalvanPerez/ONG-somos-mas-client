import { Center, Link } from '@chakra-ui/layout';
import * as React from 'react';
import { VStack, HStack, Text, Icon } from '@chakra-ui/react';
import Logo from './../components/layout/Logo';
import LoginForm from './../components/authentication/LoginForm';
import AuthBox from '../components/authentication/AuthBox';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

/*
          <Link
            as={RouterLink}
            to='/'
            d='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            position='absolute'>
            <Icon as={AiOutlineArrowLeft} fontSize='15px' />
            <Text ml='5px'>Volver</Text>
          </Link>
*/
export default function LoginPage() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  };

  return (
    <Center
      h={{ base: '100%', md: '100vh' }}
      bg='white'
      w='100%'
      d='flex'
      position='relative'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>

      <Logo onClick={handleLogoClick} cursor='pointer' mb='35px' mt={{base:'35px', md:'0px'}} />

      <AuthBox maxW='md' position='relative'>
        <VStack d='flex' alignItems='center' spacing={8} justifyContent='center' textAlign='center' maxW='md'>
          <Text fontSize="4xl" fontWeight='medium'>
            Iniciar sesión
          </Text>

          <LoginForm maxW='90%' />
          <Link fontWeight='medium'>Olvidé mi contraseña</Link>
        </VStack>
      </AuthBox>
      
      <HStack mt='40px' pb={10} mb={18}>
        <Text>¿Necesitas crear una cuenta?</Text>
        <Link fontWeight='medium'>Registrarme</Link>
      </HStack>
    </Center>
  );
}