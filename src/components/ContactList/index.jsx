import React, { useEffect, useState } from 'react';
import Logo from './Logo'
import { authenticate } from './authenticate'
import { getContactList } from './getContacts'
import { Box, Center, Heading } from '@chakra-ui/layout';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    Td,
} from "@chakra-ui/react"


export default function ListaContactos() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const token = await authenticate()
            localStorage.setItem('token', JSON.stringify(token.token))

            const data = await getContactList()
            setContacts(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Logo />
            <Center><Heading mb={3} mt={-10}>Contactos</Heading></Center>
            <Center>
                <Box overflow="auto" mb={5} display={{ md: "flex" }} width="65%" rounded="md" shadow="dark-lg">
                    <Table variant="striped" bgColor={"#9AC9FB"}>
                        <Thead>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th>Telefono</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        {contacts.length === 0 ?
                            <TableCaption >
                                <Heading size="md" textAlign="center" mb={5}>No hay contactos almacenados</Heading>
                            </TableCaption>
                            : null
                        }
                        <Tbody>
                            {contacts.length > 0 ? contacts.map(contact =>
                                <Tr key={contact.id}>
                                    <Td>{contact.name}</Td>
                                    <Td>{contact.phone}</Td>
                                    <Td>{contact.email}</Td>
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