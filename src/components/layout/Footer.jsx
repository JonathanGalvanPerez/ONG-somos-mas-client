import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box w='full'>
      <Box bg='white' w='100%' color='gray.800' pb={12} pt={16} px={1} textAlign='center'>
        <VStack spacing={10}>
         
          <Box bg='blackAlpha.300' h='1px' w='60%' />

          <VStack spacing={5}>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
