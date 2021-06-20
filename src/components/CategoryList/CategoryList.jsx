import React, { useEffect, useState } from 'react';
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import Alert from './../alertService/AlertService';
import { useSelector, useDispatch } from 'react-redux';
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
import Loader from '../Loading/Loader';
import { getToken } from './../../features/login/loginSlice';
import { getCategories, isLoading } from './../../features/categories/categorySlice';
import { fetchCategoryData } from '../../features/categories/fetchCategoryThunk';
import { deleteCategory } from '../../features/categories/deleteCategoryThunk';

export default function ListaCategorias() {
    const token = useSelector(getToken);
    const [data, setData] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryData())
    }, [dispatch]);

    const categories = useSelector(getCategories);
    const _isLoading = useSelector(isLoading);

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
		console.log('mi id es: ', categoryData.id);
        const confirmed = await Alert.confirm('Esta seguro de querer eliminar esta Categoria', 'esta accion es irreversible');
        if(confirmed)
            dispatch(deleteCategory({ token, id: categoryData.id }));
    }
    const handleCreateButton = () => {
        setData(null);
        onOpen();
    }
    const handleEditButton = (categoryData) => {
        setData(categoryData);
        onOpen();
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
                                            <DeleteIcon color="red.500" cursor="pointer" h={6} w={6} onClick={() => handleDeleteButton(category)} />
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
                <CategoriasForm onClose={onClose} data={data} />
            </Modal>
            <Loader isLoading={_isLoading} />
        </Box>
    )
}