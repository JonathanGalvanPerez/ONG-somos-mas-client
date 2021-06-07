import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
import Form from "./novelties/ModalNewsForm";

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
      <UltimasNovedades />

      {/* Test NOVELTIES FORM FOR BACKOFFICE */}
      {/* <Form label="Crear"/>
      <Form label="Editar" data={noveltie} type="edit" /> */}
    </div>
  );
}
