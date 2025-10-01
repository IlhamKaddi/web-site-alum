"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //  data 
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: "/photos_alum/Accordeo.jpg",
      title: "Design Moderne en Aluminium",
      description: "Découvrez nos solutions en aluminium alliant esthétique et durabilité pour vos projets résidentiels et commerciaux."
    },
    {
      id: 2,
      image: "/photos_alum/verrALL.jpeg",
      title: "Portes et Fenêtres sur Mesure",
      description: "Optez pour des menuiseries en aluminium de haute qualité pour un confort et une isolation optimaux."
    },
    {
      id: 3,
      image: "/photos_alum/Pergola moderne.png",
      title: "Garde-corps et Vérandas Élégants",
      description: " Apportez sécurité et style à vos espaces extérieurs grâce à nos réalisations en aluminium sur mesure."
    },
    {
      id: 4,
      image: "/photos_alum/veranda.jpg",
      title: " Expertise et Innovation",
      description: "Bénéficiez d’un savoir-faire unique et de solutions innovantes pour sublimer vos espaces."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };



  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full l mx-auto bg-white   overflow-hidden animate-fade-in">
      {/*  CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from { 
            opacity: 0; 
            transform: translateY(-20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-30px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.7s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.3s both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.3s both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out 0.4s both;
        }
        
        .animate-progress-fill {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      
      {/* Image Container */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          key={`image-${currentIndex}`}
          src={currentItem.image}
          alt={currentItem.title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105 animate-fade-in"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Text Content on Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 ">
          <div className="transform transition-all duration-700 ease-out">
            <h2 
              key={`title-${currentIndex}`}
              className=" text-[#ff914d] text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in-up"
            >
              {currentItem.title}
            </h2>
            <p 
              key={`desc-${currentIndex}`}
              className=" text-white text-lg leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up-delay"
            >
              {currentItem.description}
            </p>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 z-10 animate-slide-in-left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 z-10 animate-slide-in-right"
        >
          <ChevronRight size={24} />
        </button>
    

      </div>
    </div>
  );
};

export default ImageCarousel;