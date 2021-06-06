import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
import Form from "./novelties/ModalNewsForm";

export default function Inicio() {
  return (
    <div>
      {/* Inserte aquí el header */}
      <Slider/>
      <UltimasNovedades />

      <Form/>
    </div>
  );
}
