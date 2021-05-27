import * as React from 'react';
import { Box, Link } from '@chakra-ui/layout';

export default function AuthBox({ children, ...props }) {
  return (
    <Box w='lg' maxW='lg' bg='white' maxH='md' p={5} shadow='xl' flex='1' borderRadius='lg' {...props}>
      <Link position='absolute' top='18%' justifySelf='flex-start' alignSelf='self-start'>
        Volver a inicio
      </Link>
      {children}
    </Box>
  );
}
