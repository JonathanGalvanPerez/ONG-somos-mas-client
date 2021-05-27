import * as React from 'react';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Box, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { AUTH_FORM_VALIDATIONS } from '../../app/config';

export default function LoginForm({ onLoginSubmit, ...props }) {
  function validateEmail(value) {
    let error;
    if (!value) error = 'El email es requerido';
    else if (!value.match(AUTH_FORM_VALIDATIONS.EMAIL_REGEX)) error = 'Introduce un email válido';
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) error = 'La contraseña es requerida';
    else if (value.length < AUTH_FORM_VALIDATIONS.MIN_PASSWORD_LENGTH)
      error = 'La contraseña debe tener un mínimo de 6 caracteres';

    return error;
  }

  return (
    <Box w='full' {...props}>
      <Formik
        initialValues={{}}
        onSubmit={onLoginSubmit}>
        {(props) => (
          <Form>
            <VStack spacing={5}>
              <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <Input size='lg' borderColor='gray.300' type='email' {...field} id='email' placeholder='Email' />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <Input
                      size='lg'
                      borderColor='gray.300'
                      type='password'
                      {...field}
                      id='password'
                      placeholder='Contraseña'
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                w='full'
                borderRadius='full'
                size='md'
                mt={4}
                fontWeight='medium'
                fontSize='lg'
                color='white'
                _hover={{ bg: 'gray.900' }}
                bg='gray.700'
                py={6}
                isLoading={props.isSubmitting}
                type='submit'>
                Iniciar sesión
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
