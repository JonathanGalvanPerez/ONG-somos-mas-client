import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Spacer, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
export default function Card({testimonio}) {

    const handleEditClick = () => {
    }

    const handleDeleteClick = () => {

    }

    return (
        <Box
            bg="white" p="2.5"
            dispdlay="flex"
            borderRadius="lg"
            boxShadow="lg"
        >
            <Text
                p="2.5"
                textTransform="uppercase"
                fontSize="2xl"
                textShadow="-2px 0px 2px #FAFA88"
                fontWeight="semibold"
            >   
                {testimonio.name}

            </Text>

            <Spacer />

            <Box
                px="3" py="2"
                borderLeft="2px"
                borderLeftColor="#DB5752"
            >

                <Text
                    as="cite"
                    fontSize="lg"
                >

                    <q>{testimonio.content}</q>


                </Text>
            </Box>

         {   window.location.pathname === '/backoffice/testimonials' &&
            <Flex >

                <Spacer />
                
                
                <Button bg="orange.200" p="1" mx="1" onClick={handleEditClick}>
                    <EditIcon />
                </Button>

                <Button bg="red.200" p="1" onClick={handleDeleteClick}>
                    <DeleteIcon />
                </Button>


            </Flex>}
            
        </Box>
    )
}
