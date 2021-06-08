import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';
import Card from '../components/novelties/Card';
import axios from 'axios';
import { API_BASE_URL } from '../app/config';
import CardDetail from '../components/novelties/CardDetail';


export default function Novelties() {


  const [novelties, setNovelties] = useState([])

  useEffect(() => {
    (async function getEntries() {
      const entries = await axios.get(`${API_BASE_URL}/news`);
      setNovelties(entries.data);
    })();
  }, [])

  return (
    <Box display="flex" justifyContent="center">

      <Box
        bg="green.100" h="max-content"
        w={{ base: "100%", lg: "80%" }} >

        <Box bg="green.200" textAlign="center">

          <Text fontSize="5xl" as="em">
            Novedades
          </Text>

        </Box>



        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          p={{ base: "5", lg: "10" }}
        >
          {
            novelties.map(({ id, image, name, createAd }, index) => (


              <Link to={`/novedades/${id}`} >

                <GridItem colSpan={1} cursor="pointer" borderRadius="lg" _hover={{
                  transform: 'scale(1.05)', transitionProperty: 'all',
                  transitionDuration: '0.5s',
                  borderWidth: "4px", borderColor: "teal.300"
                }}>
                  <Card imageUrl={image} index={index} createAt={moment(createAd).format('LL')} title={name} />
                </GridItem>

              </Link>


            ))
          }

        </Grid>
      </Box>
    </Box>
  )
}
