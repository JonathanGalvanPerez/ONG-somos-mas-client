import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
import Form from "./novelties/ModalNewsForm";

import { Heading } from '@chakra-ui/react';

export default function Inicio() {

//test noveltie
  //  const noveltie = {
  //    title: 'title',
  //    content: 'content',
  //  category: 'category',
  //    image: '?'
  //  }

  return (
    <div>
      {/* Inserte aquí el header */}
      <Slider/>

      
      <Heading textAlign="center" fontSize={{ base: "xl", md: "1xl", lg: "3xl" }} my={8} >Texto de Bienvenida </Heading> {/* //OT34-105 */}

      <UltimasNovedades />

      {/* Test NOVELTIES FORM FOR BACKOFFICE */}
      {/* <Form label="Crear"/>
      <Form label="Editar" data={noveltie} type="edit" /> */}
    </div>
  );
}
