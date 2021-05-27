import * as React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export default function AuthInput({ onLoginSubmit, Icon, ...props }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' children={<Icon mt='6px' color='gray.300' />} />
      <Input size='lg' borderColor='gray.300' {...props} />
    </InputGroup>
  );
}
