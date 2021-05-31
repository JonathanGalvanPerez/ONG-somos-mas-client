import moment from 'moment'
import { Link } from 'react-router-dom';
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
    id:'1',
    title: 'new one',
    image: Image1,
    createAd: Date.now()
  },
  {
    id:'2',
    title: 'new two',
    image: Image2,
    createAd: Date.now()
  },
  {
    id:'3',
    title: 'new three',
    image: Image3,
    createAd: Date.now()
  },
  {
    id:'4',
    title: 'new four',
    image: Image4,
    createAd: Date.now()
  }
]


export default function Novelties() {

  // const [data, setData] = useState({})

  return (
    <Box display="flex" justifyContent="center">

      <Box bg="blue.100" w={{ base: "100%", lg: "80%" }} h="max-content">

        <Box bg="green.200" textAlign="center">
          <Text fontSize="5xl" as="em">
            Novedades
          </Text>

        </Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          p={{base:"5", lg:"10"}}
        >
          {
            testData.map((item, index) => (


              <Link to={`/novedades/${item.id}`}>
              
              <GridItem colSpan={1} cursor="pointer" borderRadius="lg" _hover={{
                transform: 'scale(1.05)', transitionProperty: 'all',
                transitionDuration: '0.5s',
                borderWidth: "4px", borderColor: "blue.300"
              }}>
                <Card imageUrl={item.image} index={index} createAt={ moment(item.createAd).format('LL')} title={item.title} />
              </GridItem>
              
              </Link>

              
            ))
          }

        </Grid>
      </Box>
    </Box>
  )
}
