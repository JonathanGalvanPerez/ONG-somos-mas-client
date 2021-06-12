import React from 'react';
import { Box, Container, Link, Stack, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/layout';
import { AccordionItem, AccordionButton, Accordion, AccordionIcon, AccordionPanel } from '@chakra-ui/accordion';
import { MdCheckCircle, MdSettings }from 'react-icons/md';
import { GrFacebook } from 'react-icons/gr';

export default function ContactoMsg() {
  return (
    <VStack border='gray.100 solid 1px'>
      <Box flexShrink={0} marginX='6' mb={5}>
        <Container centerContent>
          <Stack>
            <Text fontSize='3xl' align='center' mt={4} fontWeight='bold'>
              Contacto
            </Text>
            <Box textAlign='left'>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={GrFacebook}  />
                  Somos_Mas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle}  />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle}  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={MdSettings}  />
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
