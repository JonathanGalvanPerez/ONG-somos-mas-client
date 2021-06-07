import { Badge, Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CardDetail() {

    const [data, setData] = useState({})


    useEffect(() => {
       (async ()=>{
            const res = await axios.get('http://localhost:3000/news/3')
            setData(res.data);
       })()
    }, [])


  return (
    <Box w="100%" borderWidth="4px" borderRadius="lg" boxShadow="xl">

      <Box backgroundSize="cover" height="35vh" />

      <Box padding="3" bg="gray.300">
        <Text
          fontWeight="semibold"
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          as="em"
        >
            {data.name}
        </Text>

        <Box d="flex" alignItems="baseline" >
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          </Box>
        </Box>
        {data.createdAt}

        
      </Box>
    </Box>
  )
}
