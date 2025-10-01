import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const DevisAcc: React.FC = () => {
  return (
    <div className="relative min-h-screen  overflow-hidden">
    
      <div className="absolute inset-0">

        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#ff914d] to-[#ffffff] rounded-full opacity-50 blur-3xl rotate-12"></div>

        <div className="absolute top-1/4 -left-32 w-96 h-64 bg-gradient-to-r from-[#ffffff] to-[#ff914d] rounded-full opacity-40 blur-2xl -rotate-45"></div>
 
        <div className="absolute bottom-0 right-0 w-96 h-48 bg-gradient-to-t from-[#ff914d] to-[#ffffff] opacity-70 skew-x-12 blur-sm"></div>
        <div className="absolute bottom-0 right-20 w-80 h-40 bg-gradient-to-t from-[#ff914d] to-[#ffffff] opacity-60 skew-x-6 blur-sm"></div>


        {/* Floating dots */}{" "}
        <motion.div
          className="absolute top-20 right-1/4 w-4 h-4 bg-[#ff914d] rounded-full opacity-70"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#ff914d] rounded-full opacity-60"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#ff914d] rounded-full opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/5 w-8 h-8 bg-[#ff914d] rounded-full opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />


      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Circular element with center dot */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 bg-white rounded-full shadow-lg border-4 border-[#ff914d]/20">
             
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 bg-[#ff914d] rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
          
              <div className="absolute inset-4 border-2 border-[#ff914d]/10 rounded-full"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#ff914d]">Un nouveau </span>
            <span className="text-slate-800">projet ?</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl mb-8 font-medium">
            Obtenez votre devis personnalisé dès maintenant
          </p>

         
          <div className="mb-8">
            <a
              href="tel:+212522897014"
              className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-slate-900 transition-colors duration-200"
            >
              +212 5 22 89 70 14
            </a>
          </div>

            <Link
              href="/devis"
              className="bg-[#ff914d] text-white px-6 py-2 rounded-full text-sm font-medium"
              
            >
              Demander un devis
            </Link>
        </div>
      </div>

      {/* Floating accent dots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff914d] rounded-full opacity-60 animate-pulse"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#ff914d] rounded-full opacity-50 animate-pulse"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default DevisAcc;
