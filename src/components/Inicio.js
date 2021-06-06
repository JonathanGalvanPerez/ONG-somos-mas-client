import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
import Form from "./novelties/ModalNewsForm";

export default function Inicio() {

  const noveltie = {
    title: 'asdas',
    content: 'asdasd',
    category: 'asdas',
    image: ''
  }
  return (
    <div>
      {/* Inserte aquí el header */}
      <Slider/>
      <UltimasNovedades />

      <Form label="Editar" type="edit" data={noveltie}/>
    </div>
  );
}
