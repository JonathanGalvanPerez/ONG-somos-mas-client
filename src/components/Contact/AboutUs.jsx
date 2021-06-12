import React from 'react';
import { Box, Container, Link, Stack, Text, VStack } from '@chakra-ui/layout';
import { AccordionItem, AccordionButton, Accordion, AccordionIcon, AccordionPanel } from '@chakra-ui/accordion';

export default function ContactoMsg() {
  return (
    <VStack border='gray.100 solid 1px'>
      <Box flexShrink={0} marginX='6' mb={5}>
        <Container centerContent>
          <Stack>
            <Text fontSize='4xl' align='center' mt={4} fontWeight='bold'>
              Nosotros
            </Text>
            <Text as='em'>
              ASD
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Visión
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava,
                    otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte,
                    responsabilidad y compromiso. - ***Misión*** Trabajar articuladamente con los distintos aspectos de
                    la vida de las familias, generando espacios de desarrollo personal y familiar, brindando
                    herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Misión
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios
                    de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a
                    través de su propio esfuerzo.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Text>
            <Box textAlign='left'>
              <Text as='u' fontWeight='bold' fontSize='lg'>
                Datos de contacto:{' '}
              </Text>
              <br />
              <Text>
                - Mail:{' '}
                <Link fontWeight='bold' fontSize='.8rem'>
                  somosfundacionmas@gmail.com
                </Link>
              </Text>

              <Text as='i'>
                - Instagram:{' '}
                <Link fontWeight='bold' fontSize='.9rem'>
                  SomosMás
                </Link>
              </Text>
              <br />
              <Text as='i'>
                - Facebook:{' '}
                <Link fontWeight='bold' fontSize='.9rem'>
                  Somos_Más
                </Link>
              </Text>
              <br />
              <Text as='i'>
                - Teléfono de contacto:{' '}
                <Link fontWeight='bold' fontSize='.9rem'>
                  1160112988
                </Link>
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </VStack>
  );
}
