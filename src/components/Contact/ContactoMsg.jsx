import React from 'react';
import { Box, Container, Link, Stack, Text, VStack, List, ListItem, ListIcon, Grid, HStack } from '@chakra-ui/layout';
import { AccordionItem, AccordionButton, Accordion, AccordionIcon, AccordionPanel } from '@chakra-ui/accordion';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { GrFacebook } from 'react-icons/gr';
import { SimpleGrid } from '@chakra-ui/react';

export default function ContactoMsg() {
  return (
    <VStack border='gray.100 solid 1px' pr={5}>
      <Box flexShrink={0} marginX='7' mb={5}>
        <Container centerContent>
          <Stack spacing={6}>
            <Box fontSize='3xl' align='center' fontWeight='bold' borderBottom="2px" borderColor="red.100" pb={2}>
              Contacto
            </Box>
            <VStack spacing={5} letterSpacing="wide">
              <Text>
                Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las
                familias del barrio.
              </Text>
              <Text>
                Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de
                trabajo.
              </Text>
              <Text>
                Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación,
                deportes, primera infancia, salud, alimentación y trabajo social.
              </Text>
            </VStack>
          </Stack>
          <SimpleGrid spacing={3} columns={2} mt={10} w="full">
              <HStack fontSize="lg" justify="center">
                <GrFacebook />
                <Link>Somos_Mas</Link>
              </HStack>
              <HStack fontSize="lg" justify="center">
                <GrFacebook /> <Link>Somos_Mas</Link>
              </HStack>
              <HStack fontSize="lg" justify="center">
                <GrFacebook /> <Link>Somos_Mas</Link>
              </HStack>
              <HStack fontSize="lg" justify="center"  >
                <GrFacebook /> <Link>Somos_Mas</Link>
              </HStack>
            </SimpleGrid>
        </Container>
      </Box>
    </VStack>
  );
}
