import * as React from 'react';
import { Box } from '@chakra-ui/layout';

export default function AuthBox({ children, ...props }) {
  return (
    <Box
      w='full'
      h='fit-content'
      bg='white'
      py={7}
      boxShadow='xl'
      borderWidth='1px'
      borderColor='gray.200'
      borderRadius='xl'
      d='flex'
      justifyContent='center'
      justifyItems='center'
      {...props}>
      {children}
    </Box>
  );
}
