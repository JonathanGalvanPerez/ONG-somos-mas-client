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
            <VStack py="30px" width={{ base: "95%", md: "70%", xl: "35%"}} rounded="lg"  shadow="sm" bg="white">
                <Text as="u" fontSize="xl" textAlign="center" >Información</Text>
                <ProfileForm userData={userData} />
            </VStack>
            <Stack direction={{base: "column", sm: "row"}} rounded="lg" shadow="lg" bg="white">
                <ChangePassword />
                <DeleteAccount />
            </Stack>

        </VStack>
    )
}