import React from 'react';
import { Button } from '@chakra-ui/button'
import { Container, Text, Stack } from '@chakra-ui/layout'
import AlertService from '../alertService/AlertService'

function DeleteAccount() {

    const handleClick = () => {
        AlertService.confirm("Eliminar cuenta", "¿Está seguro de que quiere eliminar su cuenta de usuario?")
    }

    return (
        <Stack spacing={12} mt={12} ml={12} mb={4} mr={12}>
            <Text fontSize="1rem">
                SUSPENDER CUENTA
            </Text>

            <Container width="100%">
                <Button
                    colorScheme="red"
                    onClick={handleClick}
                    width="auto"
                    textAlign="center"
                    display="inline-block"
                    p={3}
                >
                    Eliminar cuenta
            </Button>
            </Container>

        </Stack>
    )
}

export default DeleteAccount