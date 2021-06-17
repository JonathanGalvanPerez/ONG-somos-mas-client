import React, { useEffect, useState } from 'react';
import { getCategories } from './getCategories'
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import { DeleteIcon } from '@chakra-ui/icons'

import Alert from './../alertService/AlertService';
import axios from 'axios';
import { API_BASE_URL } from './../../app/config';
import { useSelector } from 'react-redux';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    Td,
} from "@chakra-ui/react"

export default function ListaCategorias() {
    const [categories, setCategories] = useState([]);
    //const token = useSelector(getToken);
    const token = useSelector((state) => state.login.token)

    useEffect(() => {
        async function fetchData() {

            const data = await getCategories()
            if (data) {
                setCategories(data)
            }
        }
        fetchData()
    }, []);
    
    const handleDeleteButton = async (categoryData) => {
        /* Mostrar alerta y mandar un DELETE al server */
        try {
            const confirmed = await Alert.confirm('Esta seguro de querer eliminar esta Categoria', 'esta accion es irreversible');
            if(confirmed){
                const result = await axios.delete(API_BASE_URL + '/categories/' + categoryData.id, {
                    headers: { Authorization: 'Bearer ' + token }
                });
                if(result.data?.succes)
                    Alert.success('Hecho', 'La categoria ha sido eliminada');
                else
                    Alert.error('Ups', 'Hubo un problema. Intente nuevamente más tarde');
            }
        } catch(err) {
            console.log(err);
            Alert.error('Ups', 'Hubo un problema. Intente nuevamente más tarde');
        }
    }

    return (
        <div>

            <Text fontSize="3xl" align="center" mt={2} mb={2} fontWeight="bold">Categorías</Text>
            <Center>
                <Box overflow="auto" mb={5} display={{ md: "flex" }} width="35%" rounded="md" shadow="dark-lg">
                    <Table variant="striped">
                        <Thead bgColor={"#9AC9FB"}>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th textAlign="end">Eliminar</Th>
                            </Tr>
                        </Thead>
                        {categories.length === 0 ?
                            <TableCaption >
                                <Heading size="md" textAlign="center" mb={5}>No hay categorias guardadas</Heading>
                            </TableCaption>
                            : null
                        }
                        <Tbody>
                            {categories.length > 0 ? categories.map((category, index) =>
                                <Tr key={index}>
                                    <Td fontWeight="bold">{category.name}</Td>
                                    <Td textAlign="end"><DeleteIcon color="red.500" cursor="pointer" h={6} w={6} onClick={() => handleDeleteButton(category)} /></Td>
                                </Tr>)
                                : null
                            }
                        </Tbody>
                    </Table>
                </Box >
            </Center>
        </div>
    )
}