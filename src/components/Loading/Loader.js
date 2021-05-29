import { Flex, Box } from '@chakra-ui/layout';
import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

export default function Loader({isLoading}) {
    if(!isLoading)
        return null;
    return (
        <Flex h="100%" w="100%" pos="fixed" bgColor="rgba(173, 173, 173, 0.3)"
         justify="center" align="center">
            <Box d="inline-block" m="0">
                <DotLoader color="#9ac9fb" size={80} css={{
                    display: 'block',
                    margin: '0',
                    width: '100px',
                    height: '100px'
                }}/>
            </Box>
        </Flex>
        )
}
