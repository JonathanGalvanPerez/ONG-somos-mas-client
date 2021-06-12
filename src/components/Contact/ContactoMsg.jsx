import React from 'react';
import { Box, Container, Link, Stack, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/layout';
import { AccordionItem, AccordionButton, Accordion, AccordionIcon, AccordionPanel } from '@chakra-ui/accordion';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { GrFacebook } from 'react-icons/gr';

export default function ContactoMsg() {
  return (
    <VStack border='gray.100 solid 1px'>
      <Box flexShrink={0} marginX='6' mb={5}>
        <Container centerContent>
          <Stack spacing={5}>
            <Text fontSize='3xl' align='center' mt={4} fontWeight='bold'>
              Contacto
            </Text>
            <VStack spacing={5}>
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
            <Box textAlign='left'>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={GrFacebook} />
                  Somos_Mas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={MdSettings} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Container>
      </Box>
    </VStack>
  );
}
