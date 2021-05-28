import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Button,Stack } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Box,Image,Badge } from "@chakra-ui/react"
import { Grid } from "@chakra-ui/react"
import{ FooterNavLinks} from "../components/layout/footer/FooterNavLinks"

const News = () => {

    const [news, setNews] = useState([
        {
        id:"1",
        name:"Martin",
        image:"https://bit.ly/2Z4KKcF",
        createdAt:"2021-05-26 17:08:31"
        },
        {
            id:"2",
            name:"Copa libertadores",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-23 16:02:01"
        },
        {
            id:"3",
            name:"Jose",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-24 20:05:12"
        },
        {
            id:"4",
            name:"Jose",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-24 20:05:12"
        },
        {
            id:"5",
            name:"Jose",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-24 20:05:12"
        },
        {
            id:"6",
            name:"Jose",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-24 20:05:12"
        },
        {
            id:"7",
            name:"Jose",
            image:"https://bit.ly/2Z4KKcF",
            createdAt:"2021-05-24 20:05:12"
        }
    
    ])
    const deleteNews = id =>{
        console.log(id);
    }

    const editNews = id =>{
        console.log(id);
    }
    
    /* useEffect(() => {
        consultarAPi()
    }, []) */
    
    //Una vez creada el modelo entries hacer la consulta get para traer los entries de type = news. Mientras tanto se usa un array
    /* const consultarAPi = () =>{
        const consultAPI =async () =>{
            const url = `https://localhost:3006/news` 
            await axios.get(url)     
            .then(respuesta =>{
                setNews( respuesta.data)
                                        
                    
                })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
        } */

    return (
    <>
        <Container maxW="container.lg">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {news.map(news => (
                    <Box  maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={news.image} alt={news.name} />

                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                                <Badge borderRadius="full" px="1" colorScheme="teal">
                                    Novedades
                                </Badge>
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="sm"
                                    textTransform="uppercase"
                                    ml="2"
                                >
                                    {news.name} 
                                </Box>
                            </Box>
                            <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="sm"
                                    textTransform="uppercase"
                                    ml="2"
                                    mt="4"
                                >
                                    
                                    {news.createdAt}
                                </Box>
                            <Box
                                mt="4"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated
                            >
                                <Stack direction="row"  align="center">
                                    <Button
                                        size="xs"  
                                        colorScheme="red" 
                                        variant="solid"
                                        onClick={e=>deleteNews(news.id)}
                                    >
                                        Eliminar
                                    </Button>
                                    <Button
                                        size="xs"
                                        colorScheme="green" 
                                        variant="solid"
                                        onClick={e=>editNews(news.id)}
                                    >
                                        Editar
                                    </Button>
                                </Stack>
                            </Box>

                            

                            
                        </Box>
                    </Box>
                ))}
            </Grid>

            
        </Container>
    </>

     )
}
 
export default News;