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

export default function AuthInput({ onLoginSubmit, Icon, ...props }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={<Icon mt='6px' color='gray.300' />} />
      <Input size='lg' borderColor='gray.300' {...props} />
    </InputGroup>
  );
}
