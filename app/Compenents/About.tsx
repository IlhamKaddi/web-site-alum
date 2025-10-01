"use client";

import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Building,
  Target,
  Eye,
  Heart,
//   ArrowRight,
} from "lucide-react";

type TabKey = "histoire" | "mission" | "equipe";

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// interface Certification {
//   name: string;
//   description: string;
// }

const AboutUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>("histoire");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats: Stat[] = [
    { number: "15+", label: "Années d'Expérience", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Projets Réalisés", icon: <Building className="w-6 h-6" /> },
    { number: "98%", label: "Clients Satisfaits", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Professionnels", icon: <Users className="w-6 h-6" /> },
  ];

  const values: Value[] = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Excellence",
      description:
        "Nous visons la perfection dans chaque projet, des matériaux de première qualité aux finitions impeccables.",
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Fiabilité",
      description:
        "Respect des délais, garanties étendues et service après-vente de qualité pour votre tranquillité d'esprit.",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Passion",
      description:
        "Notre équipe partage une passion commune pour l'innovation et la création d'espaces exceptionnels.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Précision",
      description:
        "Chaque mesure, chaque découpe, chaque installation est réalisée avec une précision millimétrique.",
    },
  ];

  // const certifications: Certification[] = [
  //   { name: "ISO 9001", description: "Qualité certifiée" },
  //   { name: "CE", description: "Conformité européenne" },
  //   { name: "NF", description: "Norme française" },
  //   { name: "QUALIBAT", description: "Qualification bâtiment" },
  // ];

  const tabContent: Record<TabKey, { title: string; content: React.ReactNode }> = {
    histoire: {
      title: "Notre Histoire",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Fondée en 2009 à Casablanca,{" "}
            <strong className="text-orange-600">ALUMICRAFT</strong> est née de la vision
            de créer des solutions en menuiserie aluminium alliant innovation, qualité et
            esthétique.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce qui a commencé comme une petite entreprise familiale s est transformé en
            une référence incontournable du secteur.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-800 mb-2">Moments Clés</h4>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> 2009 : Création d ALUMICRAFT
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> 2015 : ISO 9001 obtenu
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> 2020 : Expansion commerciale
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> 2024 : 500e projet accompli
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    mission: {
      title: "Notre Mission",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-500 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Transformer vos espaces avec des solutions innovantes et esthétiques.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-orange-500 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Devenir la référence en menuiserie aluminium au Maroc.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    equipe: {
      title: "Notre Équipe",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Une équipe de plus de 50 professionnels dédiés à vos projets.
          </p>
        </div>
      ),
    },
  };

  return (
    <section
      id="about-section"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qui Sommes-Nous<span className="text-orange-600"> ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre histoire et notre mission.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs + Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Explorer</h3>
              <nav className="space-y-2">
                {Object.entries(tabContent).map(([key, content]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as TabKey)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === key
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50 hover:text-orange-600"
                    }`}
                  >
                    {content.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {tabContent[activeTab].title}
              </h3>
              <div
                className={`transform transition-all duration-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs<span className="text-orange-600"> Fondamentales</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces principes guident nos actions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
