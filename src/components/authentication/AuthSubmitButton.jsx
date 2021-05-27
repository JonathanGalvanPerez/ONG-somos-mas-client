import * as React from 'react';
import { Button } from '@chakra-ui/react';

export default function AuthSubmitButton({ isLoading, children, ...props }) {
  return (
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
      isLoading={isLoading}
       {...props}>
      {children}
    </Button>
  );
}
