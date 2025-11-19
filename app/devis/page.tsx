"use client";
import Banner from "../Compenents/Banner";
import WhatsappButton from "@/app/Compenents/WhatsappButton ";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export const devisSchema = z.object({
  nom: z.string().min(1, "Nom obligatoire"),
  email: z.string().email("Email invalide"),
  telephone: z
    .string()
    .regex(
      /^(0(5|6|7)\d{8}|\+212(5|6|7)\d{8})$/,
      "Numéro invalide"
    ),
  societe: z.string().optional(),
  prestation: z.string().min(1, "Choisissez une prestation"),
  objet: z.string().optional(),
  message: z.string().min(1, "Message obligatoire"),
});

export type DevisFormData = z.infer<typeof devisSchema>;

const DevisForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
    reset,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  });

  const onSubmit = async (data: DevisFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xldzgpvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
        reset();
      } else {
        alert("Erreur d’envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("erreur d'envoi:", error)
      alert("Erreur réseau. Veuillez réessayer.");
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nom & Prénom*"
                    {...register("nom")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f]"
                  />
                  {errors.nom && (
                    <p className="text-red-500 text-sm">{errors.nom.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    {...register("email")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone*"
                    {...register("telephone")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f]"
                  />
                  {errors.telephone && (
                    <p className="text-red-500 text-sm">{errors.telephone.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Société"
                    {...register("societe")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f]"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    {...register("prestation")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f] bg-transparent"
                  >
                    <option value="">Choisissez une prestation</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="design">Design</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  {errors.prestation && (
                    <p className="text-red-500 text-sm">{errors.prestation.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Objet"
                    {...register("objet")}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Message*"
                  {...register("message")}
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#d4876f] resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-3 border-2 border-[#2c3e50] text-[#2c3e50] font-medium rounded-sm hover:bg-[#2c3e50] hover:text-white transition"
                >
                  {isSubmitting ? "Envoi..." : "ENVOYER"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
 <WhatsappButton />
    
    </>
  );
};

export default DevisForm;