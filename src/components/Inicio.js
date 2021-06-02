import React from "react";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
export default function Inicio() {
  return (
    <div>
      {/* Inserte aquí el header */}
      <Slider/>
      <UltimasNovedades />
    </div>
  );
}
