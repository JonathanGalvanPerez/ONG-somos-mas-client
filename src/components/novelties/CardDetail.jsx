import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import moment from 'moment'
import { useParams } from 'react-router'
import axios from 'axios'


export default function CardDetail() {

  const [data, setData] = useState({})
  const {id} = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3000/news/${id}`)
      setData(res.data);
    })()
  }, [])


  return (
    <Container maxW="container.lg" >
      <Box w="100%" borderWidth="6px" borderRadius="lg" boxShadow="xl" >

        <Box  backgroundImage={data.image} backgroundSize="cover" height="75vh" />

        <Box  padding="5" bg="gray.200">
          <Flex>
          <Text
            ml="2"
            fontWeight="semibold"
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            as="em"
          >
            {data.name}
          </Text>
          <Spacer/>
          <Text>
            {moment(data.createAd).format('LL')}
          </Text>
          </Flex>
          <Box
            letterSpacing="wide"
            fontSize="xl"
            ml="2"
          >
            {data.content}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
