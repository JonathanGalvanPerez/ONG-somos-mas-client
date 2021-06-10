import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from './../../app/config';
import Alert from './../alertService/AlertService';
import { Container, Text, Button, Stack, Box, Image, Badge, Grid, Heading, Icon, VStack } from '@chakra-ui/react';
import { useParams, useHistory } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';

const ActividadId = () => {
  //const {id} = useSelector((state) =>state.activity);
  const { id } = useParams();
  const history = useHistory();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    const consultAPI = async () => {
      //When the get /: id endpoint is created, the information request is made and saved in the state
      const url = `${API_BASE_URL}/activities/${id}`;

      await axios
        .get(url)
        .then((respuesta) => {
          if (!respuesta.data) throw new Error();
          setActivity(respuesta.data);
        })
        .catch((error) => {
          history.push('/');
          Alert.error('Incorrecto', 'La actividad ingresada no existe');
        });
    };

    consultAPI();
  }, []);

  return (
    <Container
      maxW='container.lg'
      d='flex'
      border='1px'
      borderColor='blackAlpha.300'
      rounded='xl'
      p={8}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'>
      <VStack spacing={6}>
        <VStack>
          <Heading letterSpacing='wide'>{activity.name}</Heading>{' '}
          <Badge borderRadius='full' px='7' colorScheme='blue' d='flex' alignItems='center'>
            <Icon as={AiFillCalendar} mr='2px' />
            {new Date(activity.createdAt).toLocaleDateString()} | Actividad
          </Badge>
        </VStack>
        
        <Image
          rounded='md'
          boxSize='90%'
          height={{ base: '20rem', xl: '30rem' }}
          objectFit='cover'
          src={activity.image}
          alt={activity.name}
        />
        <Text letterSpacing='wide' boxSize='90%' fontSize='120%'>
          {activity.content}
        </Text>
      </VStack>
    </Container>
  );
};

export default ActividadId;
