import React, { useState } from "react";
import {
  Box,
  Text,
  Grid,
  Image,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";
import miembro1 from "../assets/images/miembro1.jpg";
import miembro2 from "../assets/images/miembro2.jpg";
import miembro3 from "../assets/images/miembro3.jpg";
import miembro4 from "../assets/images/miembro4.jpg";
import miembro5 from "../assets/images/miembro5.jpg";
import miembro6 from "../assets/images/miembro6.jpg";
import miembro7 from "../assets/images/miembro7.jpg";

const Nosotros = () => {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Miriam Rodriguez",
      image: miembro1,
    },
    {
      id: "2",
      name: "Cecilia Mendez",
      image: miembro3,
    },
    {
      id: "3",
      name: "Mario Fuentes",
      image: miembro2,
    },
    {
      id: "4",
      name: "Rodrigo Fuente",
      image: miembro7,
    },
    {
      id: "5",
      name: "Maria Garcia",
      image: miembro5,
    },
    {
      id: "6",
      name: "Marco Fernandez",
      image: miembro6,
    },
    {
      id: "7",
      name: "María Irola",
      image: miembro4,
    },
  ]);
  return (
    <Container maxW="container.lg">
      <Heading align="center" as="h1" fontSize="4xl" mb={5}>
        Sobre nosotros
      </Heading>
      <Text align="center" fontSize="xl" mb={50}>
        lorem ipsum dolor sit amet, consectet
      </Text>
      <Divider />

      <Heading align="center" as="h2" fontSize="4xl" mb={5} mt={5}>
        Miembros
      </Heading>
      <Text align="center" fontSize="xl" mb={5}>
        lorem ipsum dolor sit amet, consectet
      </Text>
      <Grid centerContent templateColumns={{base:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} gap={6} mt="4">
        {members.map((member) => (
          <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={member.id}
          >
            <Image
              src={member.image}
              alt={member.name}
              objectFit="cover"
              boxSize="250px"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Box
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="sm"
                  textTransform="uppercase"
                  ml="2"
                >
                  {member.name}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Nosotros;
