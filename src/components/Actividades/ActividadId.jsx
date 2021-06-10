import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from './../../app/config';
import Alert from './../alertService/AlertService';
import { Container, Text, Image, Badge, Heading, Icon, VStack } from '@chakra-ui/react';
import { useParams, useHistory } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';

const ActividadId = () => {
  //const {id} = useSelector((state) =>state.activity);
  const { id } = useParams();
  const history = useHistory();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    const consultAPI = async () => {
      const url = `${API_BASE_URL}/activities/${id}`;

      await axios
        .get(url)
        .then((respuesta) => {
          if (!respuesta.data) throw new Error();
          setActivity(respuesta.data);
        })
        .catch(() => {
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
      borderLeft='1px'
      borderRight='1px'
      borderRightRadius='50px'
      borderLeftRadius='50px'
      borderColor='blackAlpha.300'
      p={8}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'>
      <VStack spacing={6}>
        <VStack spacing={3}>
          <Heading
            borderTop='2px'
            borderBottom='2px'
            py='15px'
            borderTopColor='red.300'
            borderBottomColor='yellow.300'
            letterSpacing='wide'>
            {activity.name}
          </Heading>
          <Badge
            variant='outline'
            borderRadius='full'
            px='7'
            py='1'
            colorScheme='blue'
            color='blue.300'
            d='flex'
            alignItems='center'>
            <Icon as={AiFillCalendar} mr='2px' />
            {new Date(activity.createdAt).toLocaleDateString()} | Actividad
          </Badge>
        </VStack>

        <Image
          rounded='lg'
          boxSize={{ base: '100%', lg: '90%' }}
          height={{ base: '13rem', sm: '22rem', lg: '25rem' }}
          objectFit='cover'
          align='center'
          src={activity.image}
          alt={activity.name}
        />

        <Text letterSpacing='wide' boxSize={{ base: '100%', lg: '90%' }} fontSize='lg'>
          {activity.content}
        </Text>
      </VStack>
    </Container>
  );
};

export default ActividadId;
