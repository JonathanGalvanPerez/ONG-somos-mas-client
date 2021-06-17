import React, { useEffect, useState } from 'react';
import { getCategories } from './getCategories'
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

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
    useDisclosure,
    HStack,
    Button
} from "@chakra-ui/react"
import Modal from '../common/ModalWrapper';
import CategoriasForm from './../Categorias/CategoriasForm/CategoriasForm';
import { getToken } from './../../features/login/loginSlice';

export default function ListaCategorias() {
    const token = useSelector(getToken);
    const [categories, setCategories] = useState([])
    const [data, setData] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        async function fetchData() {

            const result = await getCategories()
            if (result) {
                setCategories(result)
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
    const handleCreateButton = () => {
        setData(null);
        onOpen();
    }
    const handleEditButton = (categoryData) => {
        setData(categoryData);
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
            <Modal isOpen={isOpen} onClose={onClose} label={data? 'Editar Categoria': 'Crear Categoria' }>
                <CategoriasForm onClose={handleCloseModal} data={data} />
            </Modal>
        </Box>
    )
}