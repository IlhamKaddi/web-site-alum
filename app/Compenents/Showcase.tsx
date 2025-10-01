"use client";
import Link from "next/link";
import Image from "next/image";
// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectShowcase() {
  const items = [
    {
      id: 1,
      image: "/photos_alum/Accordeo.jpg",
      title: "Villa acier profil Forster à rupture thermique",
    },
    {
      id: 2,
      image: "/photos_alum/baie-vitree-panoramique.jpg",
      title: "Passe-plat électromagnétique gamme Pharma",
    },
    {
      id: 3,
      image: "/photos_alum/Pergola moderne.png",
      title: "Porte vitrée aluminium",
    },
    {
      id: 4,
      image: "/photos_alum/veranda.jpg",
      title: "Menuiserie acier avec/sans rupture thermique",
    },
    {
      id: 5,
      image: "/photos_alum/r1.jpg",
      title: "Projet supplémentaire",
    },
    {
      id: 6,
      image: "/photos_alum/Accordeo.jpg",
      title: "Villa acier profil Forster à rupture thermique",
    },
    {
      id: 7,
      image: "/photos_alum/baie-vitree-panoramique.jpg",
      title: "Passe-plat électromagnétique gamme Pharma",
    },
    {
      id: 8,
      image: "/photos_alum/Pergola moderne.png",
      title: "Porte vitrée aluminium",
    },
    {
      id: 9,
      image: "/photos_alum/veranda.jpg",
      title: "Menuiserie acier avec/sans rupture thermique",
    },
    {
      id: 10,
      image: "/photos_alum/r1.jpg",
      title: "Projet supplémentaire",
    },
  ];

  return (
    <div className=" w-full mx-auto ">
      <Link href="/realisations ">
        <h1 className="text-4xl font-bold text-center text-[#ff914d] mt-16">
          Nos Réalisations
        </h1>
      </Link>

      <div className="relative w-full flex justify-center pt-10">
        {/* sliders----------------*/}
        <div className="flex items-center gap-6 w-full justify-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile
              640: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 4 }, // Desktop
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="space-y-2">
                  <div className="w-full h-60 overflow-hidden rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={300}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
