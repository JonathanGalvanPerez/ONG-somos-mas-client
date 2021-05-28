import React from "react";
import Footer from "./layout/footer";
import UltimasNovedades from "./layout/UltimasNovedades";
import Slider from '../components/carousel/Carousel'
export default function Inicio() {
  return (
    <div>
      {/* Inserte aquí el header */}
      <Slider/>
      <UltimasNovedades />
      <Footer />
    </div>
  );
}
