import React, { useEffect, useState } from 'react';
import { getCategories } from './getCategories'
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    Td,
    useDisclosure,
    HStack,
    Button
} from "@chakra-ui/react"
import Modal from '../common/ModalWrapper';
import CategoriasForm from './../Categorias/CategoriasForm/CategoriasForm';

export default function ListaCategorias() {
    const [categories, setCategories] = useState([])
    const [editData, setEditData] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        async function fetchData() {

            const data = await getCategories()
            if (data) {
                setCategories(data)
            }
        }
        fetchData()
    }, []);

    const createButtonStyle = {
        pos: { base: "static", md: "absolute"},
        right: { base: "auto", md: "5px"},
        top: { base: "auto", md: "5px"},
        w: { base: "100%", md: "auto" },
        px: "40px",
        bgColor: "#fafa88",
        mb: "10px"
    }
    
    const handleDeleteButton = () => {
        /* Mostrar alerta y mandar un DELETE al server */

    }
    const handleCreateButton = () => {
        setEditData(null);
        onOpen();
    }
    const handleEditButton = (categoryData) => {
        setEditData(categoryData);
        onOpen();
    }
    const handleCloseModal = (success) => {
        if(success)
            getCategories().then(result => setCategories(result));
        onClose();
    }

    return (
        <Box w={{base: "98%", lg: "80%"}} mx="auto" pos="relative">
            <Text fontSize="3xl" align="center" mt={2} mb={2} w="100%" fontWeight="bold">Categorías</Text>
            <Button onClick={handleCreateButton} {...createButtonStyle}>+ Crear categoria</Button>
            <Center>
                <Box overflow="auto" mb={5} display={{ md: "flex" }} w="100%" rounded="md" shadow="dark-lg">
                    <Table variant="striped">
                        <Thead bgColor={"#9AC9FB"}>
                            <Tr>
                                <Th w="80%">Nombre</Th>
                                <Th textAlign="center">Acciones</Th>
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
                                    <Td>
                                        <HStack justify='space-around'>
                                            <DeleteIcon color="red.500" cursor="pointer" h={6} w={6} onClick={handleDeleteButton} />
                                            <EditIcon color="red.500" cursor="pointer" h={6} w={6} onClick={() => handleEditButton(category)} />
                                        </HStack>
                                    </Td>
                                </Tr>)
                                : null
                            }
                        </Tbody>
                    </Table>
                </Box >
            </Center>
            <Modal isOpen={isOpen} onClose={onClose} label={editData? 'Editar Categoria': 'Crear Categoria' }>
                <CategoriasForm onClose={handleCloseModal} data={editData} />
            </Modal>
        </Box>
    )
}