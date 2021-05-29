import React from 'react';
import { Box, Container, Link, Stack, Text, VStack } from '@chakra-ui/layout';


export default function ContactoMsg() {

    return (
        <VStack border="gray.100 solid 1px" >
            <Box flexShrink={0} marginX="6" mb={5}>
                <Container centerContent>
                    <Stack>
                        <Text fontSize="4xl" align="center" mt={4} fontWeight="bold">Contactanos</Text>
                        <Text as="em" >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        </Text>
                        <Text>
                            <Text as="u" fontWeight="bold" fontSize="lg">Datos de contacto: </Text>
                            <br />
                            <Text >- Mail: <Link fontWeight="bold" fontSize=".8rem">somosfundacionmas@gmail.com</Link></Text>

                            <Text as="i">- Instagram: <Link fontWeight="bold"
                                fontSize=".9rem">SomosMás</Link></Text>
                            <br />
                            <Text as="i">- Facebook: <Link fontWeight="bold"
                                fontSize=".9rem">Somos_Más</Link></Text>
                            <br />
                            <Text as="i">- Teléfono de contacto: <Link fontWeight="bold"
                                fontSize=".9rem">1160112988</Link></Text>
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </VStack>
    )
}