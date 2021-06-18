import React, { useState } from "react";

import {
  Text,
  Button,
  Stack,
  Box,
  Image,
  Badge,
  Grid,
  Center,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNews, selectNewsDelete } from "../features/news/newsDeleteSlice";
import { edit } from "../features/news/newsPutSlice";
import Alert from "./alertService/AlertService";

const News = () => {
  const [news, setNews] = useState([
    {
      id: "1",
      name: "Juntos por el Poder Colectivo",
      image:
        "https://i1.wp.com/somosmas.org/wp-content/uploads/2017/11/art-2.png?resize=317%2C235&ssl=1",
      createdAt: "2021-05-26 17:08:31",
    },
    {
      id: "2",
      name: "¡Llega a Colombia la tercera edición del FITS!",
      image:
        "https://i0.wp.com/somosmas.org/wp-content/uploads/2018/01/Prisma-2.jpg?resize=400%2C250&ssl=1",
      createdAt: "2021-05-23 16:02:01",
    },
    {
      id: "3",
      name: "Encuentro para Innovadores y Emprendedores Sociales",
      image:
        "https://i1.wp.com/somosmas.org/wp-content/uploads/2017/11/mailing-1.jpg?resize=400%2C250&ssl=1",
      createdAt: "2021-05-24 20:05:12",
    },
    {
      id: "4",
      name: "Consulta Nacional de Alianza por la Niñez ",
      image:
        "https://i2.wp.com/somosmas.org/wp-content/uploads/2017/11/alianza1.png?resize=400%2C250&ssl=1",
      createdAt: "2021-05-24 20:05:12",
    },
    {
      id: "5",
      name: "Presentes en el Foro Educativo Distrital 2021",
      image:
        "https://i1.wp.com/somosmas.org/wp-content/uploads/2017/11/foro1.png?resize=400%2C250&ssl=1",
      createdAt: "2021-05-24 20:05:12",
    },
    {
      id: "6",
      name: "Somos Más apoya a la ART",
      image:
        "https://i0.wp.com/somosmas.org/wp-content/uploads/2020/04/vaki-1.jpg?resize=400%2C250&ssl=1",
      createdAt: "2021-05-24 20:05:12",
    },
    {
      id: "7",
      name: "Promueve la garantia de los derechos de los niños, niñas y adolescentes.",
      image:
        "https://i2.wp.com/somosmas.org/wp-content/uploads/2018/02/27067176_1914361545271622_52931177194889040_n.jpg?resize=400%2C250&ssl=1",
      createdAt: "2021-05-24 20:05:12",
    },
  ]);

  const deleteStatus = useSelector(selectNewsDelete);

  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    Alert.confirm("Estas seguro?", "No podras revertir estos cambios!", "Si, deseo borrarla!",
    ).then((confirmed) => {
      if (confirmed) {
        dispatch(deleteNews(id));
        /* DESCOMENTAR:  Para que funcione con la logica del state local 
        let newsArray = news.filter((news) => news.id !== id);
        setNews(newsArray);*/
        Alert.success(
          "Eliminada!",
          "La noticia ha sido eliminada exitosamente."
        );
      }
    }).catch((err) => {
      console.log(err);
      Alert.error("Ups", "Parece que hubo un error. Vuelva a intentarlo más tarde")
    });
  };

  return (
    <>
      {" "}
      {/* Cada vez que se elimina un news se vuelve a solicitar informacion a la api  */}
      {/* {deleteStatus.status==='success'?consultarAPi() : null} */}
      <Box>
        <Text fontSize="3xl">Gestionar Novedades</Text>
        <Center>
          <Grid
            centerContent
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}
            mt="4"
          >
            {news.map((news) => (
              <Box
                maxW="xs"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={news.id}
                height="380px"
              >
                <Image src={news.image} alt={news.name} height="250px" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Novedades
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {news.createdAt.slice(0, 10)}
                    </Box>
                  </Box>

                  <Box
                    mt="4"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    mb="2"
                  >
                    {news.name}
                  </Box>
                  <Stack direction="row" align="center">
                    <Button
                      size="xs"
                      colorScheme="red"
                      variant="solid"
                      onClick={(e) => handleDelete(e, news.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      size="xs"
                      colorScheme="green"
                      variant="solid"
                      onClick={() => dispatch(edit(news.id))}
                    >
                      Editar
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Grid>
        </Center>
      </Box>
    </>
  );
};

export default News;
