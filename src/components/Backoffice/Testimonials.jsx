import React from 'react'
import Card from '../testimonials/Card'
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';

export default function Testimonials() {

  const testimonials = [
    {
      name: "James Cameron",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },
    {
      name: "Tim Burton",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },{
      name: "Quentin Tarantino",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },{
      name: "Steven Spielberg",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    }    
  ]
  return (
    <Box display="flex" justifyContent="center" p="2px">

      <Box
        bg="blue.100" h="max-content"
       
        w={{ base: "100%", lg: "80%" }}
        
        borderRadius="xl"
        boxShadow="md"

        >  

        <Box bg="#9AC9FB" textAlign="center" borderTopRadius="xl" >

          <Text 
          color="#474645"
          fontWeight="bold"
          fontSize={{ base: "4xl", md:"5xl", lg: "5xl" }}
          textTransform="uppercase"
          textShadow="-2px 0px 2px #FAFA88"
           >
            Testimonials
          </Text>

        </Box>



        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          p={{ base: "5", lg: "10" }}
        >
          {
            testimonials.map(({ name, content }) => (


                <GridItem colSpan={1} cursor="pointer">
                  <Card name={name} content={content}  />
                </GridItem>



            ))
          }

        </Grid>
      </Box>
    </Box>
  )
}
