import React from 'react'
import { Center } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import logoStatic from './logo.png'

export default function Logo() {
    return (

        <Center>
            <div boxSize="sm"
                width="600px"
                height="400px"
                line-height="400px"
                margin="0px auto"
                text-align="center"
                background-color="#CCCCCC"
            >
                <Image src={logoStatic} alt="logo" height="150px" vertical-align="middle" />
            </div >
        </Center>

    )
}