import * as React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  VStack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { AUTH_FORM_VALIDATIONS } from '../../app/config';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import AuthSubmitButton from './AuthSubmitButton';

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
      <Formik initialValues={{}} onSubmit={onLoginSubmit}>
        {(props) => (
          <Form>
            <VStack spacing={5}>
              {/* Email input */}
              <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<EmailIcon mt='6px' color='gray.300' />} />
                      <Input size='lg' borderColor='gray.300' type='email' {...field} id='email' placeholder='Email' />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Password input */}
              <Field name='password' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<LockIcon mt='6px' color='gray.300' />} />
                      <Input
                        size='lg'
                        borderColor='gray.300'
                        type='password'
                        {...field}
                        id='password'
                        placeholder='Contraseña'
                      />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Login Button */}
              <AuthSubmitButton type='submit' isLoading={props.isSubmitting}>
                Iniciar sesión
              </AuthSubmitButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
