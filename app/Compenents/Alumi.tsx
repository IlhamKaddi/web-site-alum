import React from 'react';
import Image from 'next/image';

// Colonne gauche - Texte descriptif
const DescriptionSection = () => (
  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
          Gamme complète
        </p>
        <h1 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
          Menuiserie<br />
          <span className="font-medium">aluminium</span>
        </h1>
      </div>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          <span className="font-medium text-blue-600">Alumicraft</span> propose à ses
          clients une gamme complète en menuiserie
          aluminium avec notre partenaire gamme
          française. Une <span className="font-medium">fabrication
          100% française</span> avec deux gammes :
          répondant aux exigences industrielles et
          énergétiques actuelles.
        </p>
      </div>
    </div>
  </div>
);

// Colonne centrale - Image principale
const MainImageSection = () => (
  <div className="relative min-h-64 lg:min-h-full overflow-hidden">
    <Image 
      src="/photos_alum/alum4.jpg"
      alt="Façade moderne avec menuiserie aluminium"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 33vw"
      priority
    />
    <div className="absolute inset-0 bg-blue-600/20"></div>
    <div className="absolute bottom-0 right-0 w-32 h-24 bg-white/10 transform -skew-x-12"></div>
    <div className="absolute bottom-0 right-8 w-24 h-16 bg-white/10 transform -skew-x-12"></div>
  </div>
);

// Colonne droite - Maison moderne
const ModernHouseSection = () => (
  <div className="relative min-h-64 lg:min-h-full overflow-hidden">
    <Image 
      src="/photos_alum/alum3.jpg"
      alt="Maison contemporaine avec menuiserie aluminium"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 33vw"
    />
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="absolute top-1/2 right-8 w-3 h-12 bg-red-500 rounded shadow-lg"></div>
  </div>
);

// Image baie vitrée
const BayWindowSection = () => (
  <div className="relative min-h-64 overflow-hidden">
    <Image 
      src="/photos_alum/alum2.jpg"
      alt="Baie vitrée en aluminium"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 33vw"
    />
    <div className="absolute inset-0 bg-black/5"></div>
    <div className="absolute inset-4 border-2 border-white/60 shadow-inner"></div>
  </div>
);

// Image intérieur moderne
const ModernInteriorSection = () => (
  <div className="relative min-h-64 overflow-hidden">
    <Image 
      src="/photos_alum/alum1.jpg"
      alt="Intérieur moderne avec grandes ouvertures"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 33vw"
    />
    <div className="absolute inset-0 bg-white/10"></div>
    <div className="absolute top-6 left-6 w-8 h-8 bg-orange-400/80 rounded-full shadow-md"></div>
    <div className="absolute bottom-6 right-6 w-4 h-4 bg-blue-400/80 rounded shadow-md"></div>
  </div>
);

// Section jaune - À l'écoute
const ListeningSection = () => (
  <div className=" relative bg-amber-200 p-8 lg:p-12 flex flex-col justify-center">
    <div className="space-y-4">
      <h2 className="text-xl lg:text-2xl font-medium text-gray-900">
        À l écoute de vos<br />
        besoins
      </h2>
      <p className="text-gray-800 text-sm leading-relaxed">
        Découvrez nos produits<br />
        et services.
      </p>
      <div className="mt-6">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-sm text-sm font-medium hover:bg-gray-100 transition-colors">
          En savoir plus
        </button>
          <div className="absolute inset-0 bg-white/10"></div>
         <div className="absolute top-6 left-6 w-8 h-8 bg-orange-400/80 rounded-full shadow-md"></div>
      
      </div>
    </div>
  </div>
);



const MenuiserieAluminium = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section principale avec grille */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <DescriptionSection />
        <MainImageSection />
        <ModernHouseSection />
      </div>

      {/* Section inférieure */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <BayWindowSection />
        <ModernInteriorSection />
        <ListeningSection />
      </div>

 
    </div>
  );
};

export default MenuiserieAluminium;