import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { API_BASE_URL } from './../../app/config'; 
import Alert from './../alertService/AlertService';
import { Container,Text,Button,Stack,Box,Image,Badge,Grid } from "@chakra-ui/react"

const ActividadId = () => {

    const {id} = useSelector((state) =>state.activity);

    const [activity, setActivity] = useState({})

    useEffect(() => {
        getActivity()
    }, [])

    const getActivity = () =>{
        const consultAPI =async () =>{
            //When the get /: id endpoint is created, the information request is made and saved in the state
            const url = `https://${API_BASE_URL}/activities/${id}`
            await axios.get(url)
            .then(respuesta =>{
                
                setActivity(respuesta.data)
            
            })
            .catch(error =>{
                Alert.error('Incorrecto', 'La actividad ingresada no existe');
            })
            } 
            consultAPI()
        }

    return ( 
        <Container maxW='container.lg'>
            <Text fontSize="150%">{activity.name}</Text >
            
            <Badge borderRadius="full" px="7" colorScheme="teal">
            {activity.createdAt} | Actividad
            </Badge>

            <Image  mt='7' boxSize="100%" height='25rem' src={activity.image} alt={activity.name} />

            <Text mt='7'>
                {activity.content}
            </Text>

        </Container>
        
    
        );
}
 
export default ActividadId;