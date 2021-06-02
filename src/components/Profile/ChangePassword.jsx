import React from 'react';
import { Button } from '@chakra-ui/button'
import { Container, Text, Stack } from '@chakra-ui/layout'
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
        <Stack spacing={12} mt={12} ml={12} mb={4}>

            <Text fontSize="1rem">CONTRASEÑA</Text>

            <Container width="100%">
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

            </Container>

        </Stack>
    )
}

export default ChangePassword