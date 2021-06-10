import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './../../app/config';
import Alert from './../alertService/AlertService';
import { Container, Text, Image, Badge, Heading, Icon, VStack, Link, Box, LinkOverlay } from '@chakra-ui/react';
import { useParams, useHistory, Link as RouterLink } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';
import { HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

const MAX_TEXT_LENGTH = 100; // Caracteres max. que se mostraran en el resumen de la actividad

const ActividadId = () => {
  const history = useHistory();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `${API_BASE_URL}/activities`;

      await axios
        .get(url)
        .then((respuesta) => {
          if (!respuesta.data) throw new Error();
          setActivities(respuesta.data);
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
      maxW='90%'
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
      <HStack overflowX='scroll' p={10} maxW='97%'>
        {activities.map((activity) => (
          <Box
            d='flex'
            flexDirection='column'
            backgroundImage={activity.image}
            color='white'
            minH='xs'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            backgroundPosition='center'
            transitionProperty='all'
            transitionDuration='500ms'
            _hover={{ backgroundSize: 'cover' }}>
            <Box
              as='button'
              d='flex'
              flexDirection='column'
              justifyContent='center'
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
