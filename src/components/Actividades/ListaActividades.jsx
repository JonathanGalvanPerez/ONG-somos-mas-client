import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './../../app/config';
import Alert from './../alertService/AlertService';
import { Container, Text, Image, Badge, Heading, Icon, VStack, Link, Box, LinkOverlay, Skeleton, Stack, Spinner } from '@chakra-ui/react';
import { useParams, useHistory, Link as RouterLink } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';
import { HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

const MAX_TEXT_LENGTH = 100; // Caracteres max. que se mostraran en el resumen de la actividad

const ActividadId = () => {
  const history = useHistory();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const consultAPI = async () => {
      const url = `${API_BASE_URL}/activities`;

      await axios
        .get(url)
        .then((respuesta) => {
          if (!respuesta.data) throw new Error();
          setActivities(respuesta.data);
          setLoading(false);
        })
        .catch(() => {
          history.push('/');
          Alert.error('Error', 'No se han podido cargar las actividades'); // TODO: Cambiar
        });
    };

    consultAPI();
  }, []);

  const handleReadMoreClick = (id) => history.push(`/actividad/${id}`);

  return (
    <Container
      maxW={{ base: '100%', lg: '90%' }}
      d='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'>
      <Heading as='h1' letterSpacing='wide'>
        Actividades
      </Heading>
      <Text letterSpacing='wide' as='h2' p={5} fontSize='xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Text>
      {loading && (
          <Spinner size="lg" mt={6} />
      )}
      <HStack
        overflowX='scroll'
        py={5}
        maxW='100%'
        css={{
          '&::-webkit-scrollbar': {
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            width: '50%',
            height: '10px',
            borderRadius: '32px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.3)', //rgb(142, 203, 255) rgb(49, 130, 206) rgb(237, 75, 75)
            borderRadius: '32px',
          },
        }}>
        {activities.map((activity) => (
          <Box
            backgroundImage={activity.image}
            color='white'
            minH='xs'
            rounded='md'
            backgroundPosition='center'
            _hover={{ backgroundSize: 'cover' }}>
            <Box
              as='button'
              d='flex'
              flexDirection='column'
              justifyContent='center'
              rounded='md'
              alignItems='center'
              textAlign='center'
              onClick={() => handleReadMoreClick(activity.id)}
              p={5}
              bg='blackAlpha.600'
              w='sm'
              h='xs'>
              <VStack spacing={3}>
                <Heading as='h3' size='md' letterSpacing='wide'>
                  {activity.name}
                </Heading>

                <Text letterSpacing='wide' boxSize={{ base: '100%', lg: '90%' }} fontSize='lg'>
                  {activity.content?.slice(0, MAX_TEXT_LENGTH) + '...'}{' '}
                </Text>
                <Button onClick={() => handleReadMoreClick(activity.id)} colorScheme='blue' _hover={{ bg: 'blue.300' }}>
                  Leer más
                </Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </HStack>
    </Container>
  );
};

export default ActividadId;
