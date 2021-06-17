import React from 'react'
import Card from '../testimonials/Card'
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';

export default function Testimonials() {

  const testimonials = [
    {
      id: 1,
      name: "James Cameron",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },
    {
      id: 2,
      name: "Tim Burton",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },{
      id: 3,
      name: "Quentin Tarantino",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    },{
      id: 4,
      name: "Steven Spielberg",
      content:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse eligendi repellat modi similique reiciendis!"
    }    
  ]
  return (
    <Box display="flex" justifyContent="center" p="2px">

      <Box
        bg="blue.100" h="max-content"
       
        w={{ base: "100%", lg: "80%" }} >

        <Box bg="#9AC9FB" textAlign="center">

          <Text 
          color="#474645"
          fontWeight="bold"
          as="i"
          fontSize={{ base: "3xl", md:"4xl", lg: "5xl" }}
          textTransform="uppercase"
          textShadow="2px 2px white"
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
            testimonials.map((testimonio) => (


                <GridItem colSpan={1} cursor="pointer">
                  <Card testimonio={testimonio}  />
                </GridItem>



            ))
          }

        </Grid>
      </Box>
    </Box>
  )
}
