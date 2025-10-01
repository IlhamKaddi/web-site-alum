"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  // Updated static content
  const aboutLinks = [
    { name: "Notre histoire", link: "/" },
   
  ];

  const services = [
    { name: "Menuiserie aluminium", link: "/services" },

  ];

  const realisations = [
    { name: "Pergolas", link: "/realisations" },
    { name: "Portes et Fenetres", link: "/realisations" },
    { name: "Accordeons", link: "/realisations" },
  ];

  return (
    <section className="w-full bg-[#737373] py-8 px-4 sm:px-6 mt-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-16 2xl:gap-24 border-b border-[#F6F3F2] pb-6">
          {/* Logo section */}
          <div className="col-span-1 space-y-3">
            <Image
              src="/A (3)-modified.png"
              alt="Logo Mariages.io"
              width={150}
              height={70}
              className="mb-2"
            />
           
            <hr className="block md:hidden my-4 border-t border-[#F6F3F2]" />
          </div>

          {/* Links section */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 md:pl-10 lg:pl-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:pl-12">
              {/* À propos */}
              <div>
                <h3 className="text-md font-semibold text-subtext/70">
                  À propos
                </h3>
                <ul className="space-y-1.5">
                  {aboutLinks.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-subtext/70  cursor-pointer"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="md:pl-16">
                <h3 className="text-md font-semibold text-subtext/70">
                  Services
                </h3>
                <ul className="space-y-1.5">
                  {services.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-subtext/70  cursor-pointer"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Réalisations */}
              <div className="md:pl-16">
                <h3 className="text-md font-semibold text-subtext/70">
                  Réalisations
                </h3>
                <ul className="space-y-1.5">
                  {realisations.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-subtext/70  cursor-pointer"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area: contact + socials + copyright */}
        <div className="mt-6 space-y-5">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 pb-5 border-b border-[#F6F3F2] md:justify-center">
            <span className="flex items-center gap-2 text-sm ">
              <Phone size={20} />
              06 46 65 61 50
            </span>
            <span className="flex items-center gap-2 text-sm ">
              <Mail size={20} />
              alumicraft@gmail.com
            </span>
            <span className="flex items-center gap-2 text-sm ">
              <MapPin size={20} />
              Casablanca
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-5 md:border-b md:border-[#F6F3F2]">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {[
                {
                  icon: "fb",
                 
                },
                {
                  icon: "instgm",
                 
                },
                {
                  icon: "in",
                 
                },
              ].map(({ icon}) => (
                <a
                  key={icon}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon === "fb" && <Facebook size={28} />}
                  {icon === "instgm" && <Instagram size={28} />}
                  {icon === "in" && <Linkedin size={28} />}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden mb-4 border-b border-[#F6F3F2]"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm order-3 md:order-1">
              Copyright © 2025 — ALUMICRAFT. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
