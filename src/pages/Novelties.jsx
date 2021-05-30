import { Box, Text } from '@chakra-ui/layout'
import React, {useState} from 'react'
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
    createAd: Date.now
  },
  {
    title: 'new two',
    image: Image2,
    createAd: Date.now
  },
  {
    title: 'new three',
    image: Image3,
    createAd: Date.now
  },
  {
    title: 'new four',
    image: Image4,
    createAd: Date.now
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

        <Box display="flex">

          {
              testData.map((item)=>(
                      <Card  imageUrl={item.image} createAt={item.createAd} title={item.title}/>
              ))
          }


        </Box>
      </Box>
    </Box>
  )
}
