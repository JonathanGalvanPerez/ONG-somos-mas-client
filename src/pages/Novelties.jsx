import { Box, Grid, GridItem, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import Card from '../components/novelties/Card'
// test data
import Image1 from "../assets/images/novedad1.jpg";
import Image2 from "../assets/images/novedad2.jpg";
import Image3 from "../assets/images/novedad3.jpg";
import Image4 from "../assets/images/novedad4.jpg";

const testData = [
  {
    title: 'new one',
    image: Image1,
    createAd: Date.now()
  },
  {
    title: 'new two',
    image: Image2,
    createAd: Date.now()
  },
  {
    title: 'new three',
    image: Image3,
    createAd: Date.now()
  },
  {
    title: 'new four',
    image: Image4,
    createAd: Date.now()
  }
]
export default function Novelties() {

  // const [data, setData] = useState({})



  return (
    <Box display="flex" justifyContent="center">

      <Box bg="blue.200" w={{ base: "100%", lg: "80%" }} h="max-content">

        <Box bg="green.200" textAlign="center">
          <Text fontSize="5xl" as="em">
            Novedades
          </Text>

        </Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          p="10"
        >
          {
            testData.map((item) => (
              <GridItem colSpan={1} cursor="pointer" borderRadius="lg" _hover={{
                transform: 'scale(1.05)', transitionProperty: 'all',
                transitionDuration: '0.5s',
                borderWidth: "4px", borderColor: "blue.300"
              }}>
                <Card imageUrl={item.image} createAt={item.createAd} title={item.title} />
              </GridItem>
            ))
          }


        </Grid>
      </Box>
    </Box>
  )
}
