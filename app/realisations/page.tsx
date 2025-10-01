import React from 'react';
import { Realisations } from '../Compenents/Realisations';
import Banner from "../Compenents/Banner";
import WhatsappButton from "@/app/Compenents/WhatsappButton ";


function page() {
  return (
    <>
    <div>
        <Banner title="Nos Réalisations" />
      <Realisations/>
      
      
    </div>
     <WhatsappButton />
     </>
  )
}

export default page
