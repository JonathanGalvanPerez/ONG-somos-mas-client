import * as React from 'react';
import { Box } from '@chakra-ui/layout';

export default function AuthBox({ children, ...props }) {
  return (
    <Box w='full' h='fit-content' bg='white' px={5} py={7} boxShadow='lg' borderWidth="1px" borderColor="gray.200" borderRadius='xl' {...props}>
      {children}
    </Box>
  );
}
