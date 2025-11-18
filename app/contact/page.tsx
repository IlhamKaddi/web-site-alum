"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Banner from "../Compenents/Banner";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// decalrer les schema de validation avec zod
const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://formspree.io/f/meovalrq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <Banner title="Contacter nous " />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous
              accompagner dans vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Block */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Téléphone:
                    </h3>
                    <a href="tel:0646656150" className="text-gray-900">
                      06 46 65 61 50
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      E-mail:
                    </h3>
                    <a
                      href="mailto:alumicraft@gmail.com"
                      className="text-gray-900"
                    >
                      alumicraft@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Adresse :
                    </h3>
                    <p className="text-gray-600">Bourgogne, Casablanca</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("name")}
                      placeholder="Nom & Prénom*"
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email*"
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Téléphone*"
                      className={`w-full px-4 py-3 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("subject")}
                      placeholder="Sujet*"
                      className={`w-full px-4 py-3 border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Message*"
                    rows={5}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi en cours..." : "ENVOYER"}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center font-medium">
                      Message envoyé avec succès! Nous vous répondrons bientôt.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-center font-medium">
                      Une erreur s’est produite. Réessayez plus tard.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}
