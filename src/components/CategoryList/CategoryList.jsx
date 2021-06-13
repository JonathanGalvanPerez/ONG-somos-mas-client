import React, { useEffect, useState } from 'react';
import { getCategories } from './getCategories'
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
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
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchData() {

            const data = await getCategories()
            if (data) {
                setCategories(data)
            }
        }
        fetchData()
    }, [])

    return (
        <div>

            <Text fontSize="3xl" align="center" mt={2} mb={2} fontWeight="bold">Categorías</Text>
            <Center>
                <Box overflow="auto" mb={5} display={{ md: "flex" }} width="65%" rounded="md" shadow="dark-lg">
                    <Table >
                        <Thead bgColor={"#9AC9FB"}>
                            <Tr>
                                <Th>Nombre</Th>
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