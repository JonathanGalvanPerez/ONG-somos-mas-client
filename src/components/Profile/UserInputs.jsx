import React from 'react';
import { Text, Stack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import InputText from './InputText'
import AlertService from '../alertService/AlertService'


export default function UserInputs({ userData }) {

    const ShowAlertResultMsg = (field) => {
        const isOk = false
        if (isOk) {
            AlertService.success("Resultado", `Campo ${field} actualizado`)
        } else {
            AlertService.error("Resultado", `No se ha podido actualizar el campo ${field}`)
        }
    }

    const handleNameClick = async (event) => {
        const inputValue = event.target.parentNode.parentNode.childNodes[1].value
        console.log(inputValue)
        const newName = await AlertService.inputText("Actualizar Nombre")
        const validate = (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(newName)
        if (newName && validate) {
            console.log(newName)
            /* Send newName to API */

            /* Alert example */
            setTimeout(ShowAlertResultMsg("Nombre"), 1000);
        } else {
            AlertService.error(`El nombre no es válido <br /> 
            Asegurese de escribir la primera letra en mayúscula`)
        }

    }

    const handleSurnameClick = async (event) => {
        const inputValue = event.target.parentNode.parentNode.childNodes[1].value
        console.log(inputValue)
        const newSurname = await AlertService.inputText("Actualizar Apellido")
        const validate = (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(newSurname)
        if (newSurname && validate) {
            console.log(newSurname)
            /* Send surname to API */

            /* Alert example */
            setTimeout(ShowAlertResultMsg("Apellido"), 1000);
        }
        else {
            AlertService.error(`El apellido no es válido <br /> 
            Asegurese de escribir la primera letra en mayúscula`)
        }
    }

    const handleEmailClick = async (event) => {
        const inputValue = await event.target.parentNode.parentNode.childNodes[1].value
        console.log(inputValue)
        const newEmail = await AlertService.inputText("Actualizar Email")
        const validate = (/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/).test(newEmail)
        if (newEmail && validate) {
            console.log(newEmail)
            /* Send email to API */

            /* Alert example */
            setTimeout(ShowAlertResultMsg("Email"), 1000);
        } else {
            AlertService.error(`El email no es válido`)
        }
    }

    return (
        <Stack spacing={3}>
            <InputText
                name={"NOMBRE DEL USUARIO"}
                userData={userData.name}
                handler={handleNameClick}
            />
            <InputText
                name={"APELLIDO DEL USUARIO"}
                userData={userData.surname}
                handler={handleSurnameClick}
            />
            <InputText
                name={"CORREO ELECTRONICO"}
                userData={userData.email}
                handler={handleEmailClick}
            />

        </Stack>
    );
}