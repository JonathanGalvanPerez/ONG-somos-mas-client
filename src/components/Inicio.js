import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel';

import { Heading } from '@chakra-ui/react';

export default function Inicio() {

  return (
    <>
      <Slider/>      
      <Heading textAlign="center" fontSize={{ base: "xl", md: "1xl", lg: "3xl" }} my={8} >
        Texto de Bienvenida
      </Heading>
      <UltimasNovedades />
    </>
  );
}
