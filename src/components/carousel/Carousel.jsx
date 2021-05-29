import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box, Image, Text } from '@chakra-ui/react';

export default function Carousel() {

    const [items, setItems] = useState(
        {
            logoColors: ['#DB5752', '#FAFA88', '#9AC9FB'],
            data: [
                {
                    imageUrl: 'https://www.latercera.com/resizer/mI8vn88DUIOFUemIM9TSEyr0FDo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/6OCZCBLAE5AEXADOCEPV4D5HG4.jpg',
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio laborum itaque architecto eum porro aspernatur. Tempora consequatur laborum nostrum impedit, odio non perspiciatis quisquam debitis numquam quibusdam libero eaque?"
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqUuLekYoxIRK4lcfXqxbHeTqXOgZkZIeZQ&usqp=CAU',
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui id error cum maxime suscipit debitis rerum, quo omnis quam, perspiciatis explicabo, quia magnam illo quibusdam facilis dolores quis in!"
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYVnb5eydDWpCbtM-YyDje_7MjAbrcSZ5XYlfy1UF056HyILE2g9QjPrv7k4IQaKKubg&usqp=CAU',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas reiciendis exp'
                }
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        }
    )


    return (
        <div>
            <OwlCarousel
                className='owl-theme'
                loop margin={5}
                responsive={items.responsive}
            >
                {
                    items.data.map(({ imageUrl, text }, index) => {
                        return (
                            <>
                                <Box
                                    transitionProperty="all"
                                    transitionDuration="500ms"
                                    boxShadow="2xl" rounded="md"
                                    _hover={{ transform: 'scale(1.03)' }}
                                >

                                    <Image src={imageUrl} alt="" height="35vh" />

                                    <Box
                                        bg={items.logoColors[index]}
                                        height="7vh"
                                        p="2"
                                        _hover={{ height: 'max-content' }}
                                    >

                                        <Box
                                            rounded="md"
                                            opacity="95%"
                                            bg="gray.800"
                                            paddingY="1"
                                            paddingX="5"
                                        >

                                            <Text
                                                as="cite"
                                                fontSize="lg"
                                                color="white"
                                                lineHeight="200%"
                                            >
                                                {text}

                                            </Text>

                                        </Box>

                                    </Box>

                                </Box>
                            </>
                        )
                    })
                }
            </OwlCarousel>

        </div>
    )
}
