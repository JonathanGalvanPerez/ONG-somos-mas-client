import React from 'react';
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import ProfileForm from './ProfileForm'
import DeleteAccount from './DeleteAccount'
import ChangePassword from './ChangePassword'

export default function Profile() {

    /* User to test */
    const userData = {
        name: "Pedro",
        surname: "Suarez",
        email: "pedro@pedro.com"
    }

    return (
        <>
            <Box textAlign="center" mt={10}>
                <Heading as="h1" size="xl" >
                    Mi perfil
                </Heading>
            </Box>
            <Center>
                <Box mb={5} mt={4} width="60%" rounded="md" shadow="dark-lg">
                    <Text as="u" fontSize="xl" ml={12} >Editar cuenta</Text>
                    <Center>
                        <Box w="90%" m={12} rounded="md" bg="white">
                            <ProfileForm userData={userData} />
                        </Box>
                    </Center>
                </Box >
            </Center>
            <Center>
                <Box mb={5} textAlign="center" display={{ md: "flex" }} width="60%" shadow="inner">
                    <Center marginLeft="auto" marginRight="auto">
                        <ChangePassword />
                        <DeleteAccount />
                    </Center>
                </Box >
            </Center>

        </ >
    )
}