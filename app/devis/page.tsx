"use client";
import React, { useState } from 'react';
import Banner from "../Compenents/Banner";
import WhatsappButton from "@/app/Compenents/WhatsappButton ";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  prestation: string;
  objet: string;
  message: string;
}

const DevisForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    prestation: '',
    objet: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
       <Banner title="Demander Devis" />
    <div className="min-h-screen bg-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="w-16 h-16 border-2 border-gray-300 rounded-sm flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                  />
                </svg>
              </div>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-2">
                <span className="text-[#2c3e50]">Demander </span>
                <span className="text-[#d4876f]">un devis</span>
              </h1>
              <div className="w-20 h-1 bg-[#d4876f] mt-4"></div>
            </div>

            <p className="text-gray-600 text-lg">
              Obtenez votre devis personnalisé dès maintenant
            </p>

            <div className="pt-4">
              <a 
                href="tel:0522897014" 
                className="text-[#2c3e50] text-4xl lg:text-5xl font-bold hover:text-[#d4876f] transition-colors"
              >
                06 46 65 61 50
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom & Prénom*"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone*"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="societe"
                    placeholder="Société"
                    value={formData.societe}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="prestation"
                    value={formData.prestation}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 text-gray-500 bg-transparent appearance-none cursor-pointer transition-colors"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">Choisissez une prestation</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="design">Design</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="objet"
                    placeholder="Objet"
                    value={formData.objet}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#d4876f] focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-700 resize-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-3 border-2 border-[#2c3e50] text-[#2c3e50] font-medium rounded-sm hover:bg-[#2c3e50] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  ENVOYER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 <WhatsappButton />
    
    </>
  );
};

export default DevisForm;