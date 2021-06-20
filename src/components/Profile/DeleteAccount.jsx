import React from 'react';
import { Button } from '@chakra-ui/button'
import { Text, VStack } from '@chakra-ui/layout'
import AlertService from '../alertService/AlertService'

function DeleteAccount() {

    const handleClick = () => {
        AlertService.confirm("Eliminar cuenta", "¿Está seguro de que quiere eliminar su cuenta de usuario?")
    }

    return (
        <VStack spacing={5} p="20px">
            <Text fontSize="1rem">
                SUSPENDER CUENTA
            </Text>

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

        </VStack>
    )
}

export default DeleteAccount