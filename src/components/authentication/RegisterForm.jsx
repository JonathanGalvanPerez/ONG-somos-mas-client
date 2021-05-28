/*
  Simple login form with email & password validation

  Usage:
    <LoginForm onLoginSubmit={(values, actions) => {}}/>

  Props:
    onLoginSubmit: function(values, actions) - will be called on login form submit AFTER validation. values will be the object containing all the inputs VALIDATED
*/

import * as React from 'react';
import { FormControl, FormErrorMessage, Box, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { AUTH_FORM_VALIDATIONS } from '../../app/config';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import AuthSubmitButton from './AuthSubmitButton';
import AuthInput from './AuthInput';
import { PropTypes } from 'prop-types';

function RegisterForm({ onRegisterSubmit, ...props }) {
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
      <Formik initialValues={{}} onSubmit={onRegisterSubmit}>
        {(props) => (
          <Form>
            <VStack spacing={5}>
              {/* Firstname input */}
              <Field name='firstName' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                    <AuthInput Icon={EmailIcon} type='text' {...field} id='firstName' placeholder='Nombre' />
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Lastname input */}
              <Field name='lastName' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                    <AuthInput Icon={EmailIcon} type='email' {...field} id='lastName' placeholder='Apellido' />
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Email input */}
              <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <AuthInput Icon={EmailIcon} type='email' {...field} id='email' placeholder='Email' />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Password input */}
              <Field name='password' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <AuthInput Icon={LockIcon} type='password' {...field} id='password' placeholder='Contraseña' />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Confirm password input */}
              <Field name='confirmPassword' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                    <AuthInput
                      Icon={LockIcon}
                      type='password'
                      {...field}
                      id='confirmPassword'
                      placeholder='Confirmar contraseña'
                    />
                    <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Login Button */}
              <AuthSubmitButton type='submit' isLoading={props.isSubmitting}>
                Crear cuenta
              </AuthSubmitButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

RegisterForm.defaultProps = {
  onRegisterSubmit: null,
};

RegisterForm.propTypes = {
  onRegisterSubmit: PropTypes.func,
};

export default RegisterForm;
