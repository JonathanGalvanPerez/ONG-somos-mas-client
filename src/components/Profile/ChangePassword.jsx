import React from 'react';
import { Button } from '@chakra-ui/button'
import { Text, VStack } from '@chakra-ui/layout'
import AlertService from '../alertService/AlertService'

function ChangePassword() {

    const handleClick = async () => {
        const currentPassword = await AlertService.inputPassword("Ingrese su contraseña actual")
        if (currentPassword) {
            console.log(currentPassword)
            const newPassword = await AlertService.inputPassword("Ingrese la nueva contraseña")
            /* Call API to validate the current Password & Update it with the new Password */
            console.log(newPassword)

            /* Alert example */
            const isOk = false
            if (isOk) {
                AlertService.success("Resultado", "Contraseña actualizada")
            } else {
                AlertService.error("Resultado", "No se ha podido actualizar la contraseña")
            }
        }
    }

    return (
        <VStack spacing={5} p="20px">
            <Text fontSize="1rem">CONTRASEÑA</Text>
            <Button
                colorScheme="blue"
                onClick={handleClick}
                width="auto"
                textAlign="center"
                display="inline-block"
                p={3}
            >
                Cambiar contraseña
            </Button>
        </VStack>
    )
}

export default ChangePassword