/*
  Input used on authentication forms

  Usage:
    <AuthInput>

  Props:
    Icon: Node - optional icon to be displayed on the left (chakra icons)
    all other props will be spread on a chakra's <Input> component
*/

import * as React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export default function AuthInput({Icon, ...props }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={Icon ? <Icon mt='6px' color='gray.300' /> : null} />
      <Input size='lg' borderColor='gray.300' {...props} />
    </InputGroup>
  );
}
