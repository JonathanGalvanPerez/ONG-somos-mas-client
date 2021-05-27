import React from "react";
import { Box, Text, Grid, Stack, Button, VStack } from "@chakra-ui/react";
//imágenes de prueba, luego eliminar cuando no sean necesarias
import Image1 from "../../../assets/images/novedad1.jpg";
import Image2 from "../../../assets/images/novedad2.jpg";
import Image3 from "../../../assets/images/novedad3.jpg";
import Image4 from "../../../assets/images/novedad4.jpg";

export default function UltimasNovedades() {
  //datos de prueba
  const novedades = [
    {
      title: "novedad 1",
      id: 1,
      image: Image1,
      url: "ej/novedades/1",
    },
    {
      title: "novedad 2",
      id: 1,
      image: Image2,
      url: "ej/novedades/2",
    },
    {
      title: "novedad 3",
      id: 1,
      image: Image3,
      url: "ej/novedades/3",
    },
    {
      title: "novedad 4",
      id: 1,
      image: Image4,
      url: "ej/novedades/4",
    },
  ];

  return (
    <Box
      p=".5em"
      paddingRight="0"
      alignContent="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Text
        fontSize={{ base: "32px", md: "40px", lg: "48px" }}
        textAlign="center"
        fontWeight="400"
        my=".5em"
      >
        Últimas novedades
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        px=".5em"
        my="1em"
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {novedades.map((novedad) => (
          <VStack
            key={novedad.id}
            h="200px"
            w="250px"
            justifySelf="center"
            backgroundImage={novedad.image}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgBlendMode="darken"
            bgColor="rgba(0,0,0, 0.3)"
            borderRadius="5px"
            justify="center"
            transition=".5s"
            _hover={{
              bgColor: "rgba(0,0,0, 0.1)",
            }}
          >
            <Text color="white" fontSize="1.5em">
              {novedad.title}
            </Text>
            <Button
              border="1px"
              height="30px"
              borderColor="#18A0FB"
              bg="rgba(0,0,0, 0.1)"
              w="70px"
              color="#18A0FB"
            >
              VER
            </Button>
          </VStack>
        ))}
      </Grid>
      <Stack mx="auto" my="2em">
        <Button
          border="1px"
          borderColor="#18A0FB"
          bg="white"
          w="130px"
          color="#18A0FB"
        >
          Ver todas
        </Button>
      </Stack>
    </Box>
  );
}
