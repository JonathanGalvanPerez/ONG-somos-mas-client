import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Spacer, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Card(props) {
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

                {props.name}

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

                    <q>{props.content}</q>


                </Text>
            </Box>

            <Flex >

                <Spacer />

                <Button bg="orange.200" p="1" mx="1">
                    <EditIcon />
                </Button>

                <Button bg="red.200" p="1">
                    <DeleteIcon />
                </Button>


            </Flex>
            
        </Box>
    )
}
