// components/AboutUs.tsx
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start gap-8 py-8 md:py-16 ">
    
      <div className="flex-1 pl-4 md:pl-8 md:mt-16 mt-8 ">
        <h3 className="text-[#737373] text-3xl font-semibold">
          Qui sommes-nous ?
        </h3>
        <h2 className=" text-[#ff914d] mt-2 mb-4 text-2xl font-bold">
          Présentation
        </h2>
        <p className=" mb-6 ">
          Depuis sa création en 2009, ALUMICRAFT s’est imposé comme un expert de
          l’aménagement et de l’agencement d’intérieur, offrant une gamme
          complète de services à forte valeur ajoutée. Notre entreprise se
          distingue par son savoir-faire et ses compétences spécialisées qui
          nous permettent de concevoir et de fabriquer des produits entièrement
          personnalisés, en maîtrisant une diversité de matériaux.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-[#737373] text-white rounded ">
          Lire la suite
          <span className="ml-2">➔</span>
        </button>
      </div>
      {/* Image */}
      <div className="flex-1">
        <Image
          src="/photos_alum/pinterestdownloader.com-1752764671.329685.jpg"
          alt="Salle à manger moderne"
          width={800}
          height={600}
          className=" w-[400px] md:w-[900px]  h-auto md:h-[500px]"
        />
      </div>
    </section>
  );
}
