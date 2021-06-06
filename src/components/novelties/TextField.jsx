import React from 'react';
import { useField,  } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props}/>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )}