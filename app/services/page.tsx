"use client";
import Image from "next/image";
import Banner from "../Compenents/Banner";

interface Category {
  title: string;
  image: string;
  link: string;
  bg: string;
}

const categories: Category[] = [
  { title: "Portes en aluminium", image: "/photos_alum/services-alum/porte-alum.jpg", link: "#", bg: "bg-pink-50" },
  { title: "Fenêtres en aluminium", image: "/photos_alum/services-alum/fenetre-alum.jpg", link: "#", bg: "bg-blue-50" },
  { title: "Façades rideaux & murs-rideaux en verre", image: "/photos_alum/services-alum/façade-rideau-alum.jpg", link: "#", bg: "bg-green-50" },
  { title: "Vitrines commerciales & cloisons en verre", image: "/photos_alum/services-alum/cloison-vitrine-alum.jpg", link: "#", bg: "bg-yellow-50" },
  { title: "Garde-corps en aluminium & verre", image: "/photos_alum/services-alum/garde-corps-alum.webp", link: "#", bg: "bg-orange-50" },
  { title: "Vérandas & pergolas en aluminium", image: "/photos_alum/services-alum/pergola-alum.webp", link: "#", bg: "bg-rose-50" },
  { title: "Volets roulants & stores aluminium", image: "/photos_alum/services-alum/volet-roulant-alum.webp", link: "#", bg: "bg-teal-50" },
  { title: "Moustiquaires & systèmes de protection", image: "/photos_alum/services-alum/moustiquaire-alum.jpg", link: "#", bg: "bg-orange-50" },
  { title: "Cloisons de bureaux en verre & aluminium", image: "/photos_alum/services-alum/cloison-bureaux-alum.jpg", link: "#", bg: "bg-gray-50" },


];


export default function StaggeredCategories() {
  return (
    <div>
      <Banner title="Nos Services" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 p-8    [&>*:nth-child(4n)]:mt-16  mx-12">
      {categories.map((cat, index) => {
        const isRightCol = index % 2 === 1;


        const isEvenRow = Math.floor(index / 2) % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row  
               ${isEvenRow ? "md:flex-row" : "md:flex-row-reverse"}
              ${isRightCol ? "md:translate-y-24" : ""} 
            `}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover "
              />
            </div>

            {/* Text */}
            <div
              className={`w-full md:w-1/2 p-6 flex flex-col justify-center ${cat.bg}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{cat.title}</h3>
              <a
                href={cat.link}
                className="text-gray-500 hover:text-gray-700 text-sm inline-flex items-center gap-1"
              >
                En savoir plus →
              </a>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
