import React from 'react';
import { Box, VStack, Container } from '@chakra-ui/layout';
import UserInputs from './UserInputs'


export default function ProfileForm({ userData }) {

    return (
        <VStack border="gray.100 solid 1px" >

            <Box width="90%" padding="1.5">

                <VStack spacing={8} >
                    <Container
                        maxW="container.lg"
                        fontSize=".9rem">
                        <UserInputs userData={userData} />
                    </Container>

                </VStack>
            </Box>
        </VStack >
    )

}

