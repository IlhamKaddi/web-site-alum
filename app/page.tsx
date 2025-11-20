"use client";

import ImageCarousel from "@/app/Compenents/ImgsCarousel";
import Presentation from "@/app/Compenents/Presentation";
import MenuiserieAluminium from "@/app/Compenents/Alumi";
import ProjectShowcase from "@/app/Compenents/Showcase";
import DevisAcc from "@/app/Compenents/DevisAcc";
import WhatsappButton from "@/app/Compenents/WhatsappButton ";




export default function Home() {
  return (
    <div className="">
   
      <ImageCarousel />
      <Presentation />
      <MenuiserieAluminium />
      <DevisAcc />
      <ProjectShowcase />
       <WhatsappButton />
    
 
    </div>
  );
}
