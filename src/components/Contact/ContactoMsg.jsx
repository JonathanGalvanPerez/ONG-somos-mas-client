import React from 'react';
import { Box, Container, Link, Stack, Text, VStack, HStack } from '@chakra-ui/layout';
import { MdEmail } from 'react-icons/md';
import { GrFacebook } from 'react-icons/gr';
import { FaPhoneSquareAlt, FaTwitterSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function ContactoMsg() {
  const { data } = useSelector((state) => state.publicInfo);

  return (
    <VStack border='gray.100 solid 1px' pr={5}>
      <Box flexShrink={0} marginX='7' mb={5}>
        <Container centerContent>
          <Stack spacing={6}>
            <Box fontSize='3xl' align='center' fontWeight='bold' borderBottom='2px' borderColor='red.100' pb={2} mb={3}>
              Contacto
            </Box>
            <VStack spacing={5} letterSpacing='wide' color='gray.800'>
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
          <HStack fontSize={{base:"md", sm: 'lg'}} justify='center' mb={5} mt={6} borderTop='1px' borderColor='gray.200' pt={5}>
            <MdEmail />
            <Link to={`mailto:${data.orgContact[0].email || 'somosfundacionmas@gmail.com'}`}>
              {data.orgContact[0].email || 'somosfundacionmas@gmail.com'}
            </Link>
          </HStack>
          <SimpleGrid spacing={5} columns="2" w={{base:"95%", md:'75%'}}>
            <HStack color='blue.600' fontSize='lg' justify='center'>
              <GrFacebook />
              <Link>{data.orgContact[0].facebook || 'Somos_Más'}</Link>
            </HStack>
            <HStack color='#E83C78' fontSize='lg' justify='center'>
              <ImInstagram /> <Link>{data.orgContact[0].instagram || 'SomosMás'}</Link>
            </HStack>
            <HStack color='cyan.500' fontSize='lg' justify='center'>
              <FaTwitterSquare /> <Link>{data.orgContact[0].twitter || 'SomosMás'}</Link>
            </HStack>
            <HStack color='green.400' fontSize='lg' justify='center'>
              <FaPhoneSquareAlt /> <Link>{data.phone || '1160112988'}</Link>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </VStack>
  );
}
