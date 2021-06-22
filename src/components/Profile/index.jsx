import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import ProfileForm from './ProfileForm'
import DeleteAccount from './DeleteAccount'
import ChangePassword from './ChangePassword'
import { Stack } from '@chakra-ui/react';

export default function Profile() {

    /* User to test */
    const userData = {
        name: "Pedro",
        surname: "Suarez",
        email: "pedro@pedro.com"
    }

    return (
        <VStack mx="auto" spacing={5} py="15px">
            <Box textAlign="center" mt={10}>
                <Heading as="h1" size="xl" >
                    Mi perfil
                </Heading>
            </Box>
            <VStack p="20px" width={{ base: "95%", md: "80%"}} rounded="md" shadow="dark-lg">
                <Text as="u" fontSize="xl" textAlign="center" >Editar cuenta</Text>
                <ProfileForm userData={userData} />
            </VStack>
            <Stack direction={{base: "column", md: "row"}} shadow="dark-lg">
                <ChangePassword />
                <DeleteAccount />
            </Stack>

        </VStack>
    )
}