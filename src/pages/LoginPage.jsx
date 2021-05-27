import { Box, Center, Link } from '@chakra-ui/layout';
import * as React from 'react';
import {
  Image,
  VStack,
  Button,
  Container,
  HStack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Logo from './../components/layout/Logo';

export default function LoginPage() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Center bg='#FAFBFC' h='100vh' w='full' d='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Box w='lg' maxW='lg' bg='white' maxH='md' p={5} shadow='xl' flex='1' borderRadius='lg'>
        <Link position='absolute' top='18%' justifySelf='flex-start' alignSelf='self-start'>
          Volver a inicio
        </Link>
        <VStack h='full' d='flex' justifyContent='space-around' alignItems='center'>
          <Logo />
          <Formik
            initialValues={{ name: 'Sasuke' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}>
            {(props) => (
              <Form>
                <Field name='name' validate={validateName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>First name</FormLabel>
                      <Input {...field} id='name' placeholder='name' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button mt={4} colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <VStack w='80%'>
            <Button w='full' bg='gray.800' color='white'>
              Login
            </Button>
          </VStack>
          <HStack>
            <Link fontWeight='medium'>Olvidé mi contraseña</Link>
          </HStack>
        </VStack>
      </Box>
      <HStack mt='50px'>
        <Text>¿Necesitas crear una cuenta?</Text>
        <Link fontWeight='medium'>Registrarme</Link>
      </HStack>
    </Center>
  );
}
