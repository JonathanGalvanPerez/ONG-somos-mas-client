import React from 'react';
import { Box, Container, Link, Stack, Text, VStack } from '@chakra-ui/layout';


export default function ContactoMsg({ colors }) {

    const { color1, color3, color4 } = colors

    return (
        <VStack border="gray.100 solid 1px" bg={color3}>
            <Box flexShrink={0} marginX="6" mb={5}>
                <Container centerContent>
                    <Stack>
                        <Text fontSize="4xl" align="center" color={color1} fontWeight="bold">Contactanos</Text>
                        <Text as="em" color={color1}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                        <Text>
                            <Text as="u" color={color1} fontWeight="bold" fontSize="lg">Datos de contacto: </Text>
                            <br />
                            <Text as="i">- Mail: <Link color={color4} fontWeight="bold">somosfundacionmas@gmail.com</Link></Text>
                            <br />
                            <Text as="i">- Instagram: <Link color={color4} fontWeight="bold">SomosMás</Link></Text>
                            <br />
                            <Text as="i">- Facebook: <Link color={color4} fontWeight="bold">Somos_Más</Link></Text>
                            <br />
                            <Text as="i">- Teléfono de contacto: <Link color={color4} fontWeight="bold">1160112988</Link></Text>
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </VStack>
    )
}