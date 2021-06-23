import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box, Text } from '@chakra-ui/react';

//test images
import Slide1 from "../../assets/images/slide3.jpg";
import Slide2 from "../../assets/images/slide1.jpg";
import Slide3 from "../../assets/images/slide2.jpg";

export default function Carousel() {

    const [data, setData] = useState(
        {
            logoColors: ['#DB5752', '#FAFA88', '#9AC9FB'],
            responsiveBreakpoints: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            },
            items: [],

        }
    )

    useEffect(() => {
         setData({
            ...data, items: [                
                // <test data>
                {
                    imageUrl: Slide1,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio laborum itaque architecto eum porro aspernatur. "
                },
                {
                    imageUrl: Slide2,
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui id error cum maxime suscipit debitis rerum, quo omnis quam, perspiciatis explicabo, quia magnam illo quibusdam facilis dolores quis in!"
                },
                {
                    imageUrl: Slide3,
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas reiciendis exp'
                }
                // </test data> 
            ]
        })

    }, [])

    return (
        <div>
            <OwlCarousel
                className='owl-theme'
                loop margin={5}
                responsive={data.responsiveBreakpoints}
                key = {data.items?.length}
            >
                {
                    data.items.map(({ imageUrl, text }, index) => {
                        return (

                            <Box
                                cursor='pointer'
                                key={index}
                                transitionProperty="all"
                                transitionDuration="500ms"
                                boxShadow="2xl"
                                borderRadius="md"
                                overflow="hidden"
                                _hover={{
                                    '.textBox': {
                                        height: 'max-content',
                                        opacity: '1',
                                        visibility: 'visible',
                                        pb: '15px'
                                    }
                                }}

                            >
                                <Box backgroundImage={imageUrl} backgroundSize="cover" height="35vh" />
                                <Box className="textBox"
                                    bg={data.logoColors[index]}
                                    opacity="0"
                                    visibility="hidden"
                                    height="0px" 
                                    p="0px"
                                    transition='visibility 0s, opacity 500ms linear'

                                >

                                    <Box
                                        opacity="95%"
                                        bg="gray.800"
                                        paddingY="2"
                                        paddingX="5"
                                    >

                                        <Text
                                            as="cite"
                                            fontSize="lg"
                                            color="white"

                                        >
                                            {text}

                                        </Text>

                                    </Box>

                                </Box>

                            </Box>

                        )
                    })
                }
            </OwlCarousel>

        </div>
    )
}
