"use client";
import {ProjectCard} from './ProjectCard';
import {  Filter } from 'lucide-react';
import { useState } from 'react';

const commercialProjects = [
  {
    id: 1,
    title: "Façade Moderne Centre d'Affaires",
    description: "Réalisation d'une façade complète en aluminium pour un centre d'affaires de 8 étages. Système de façade rideau avec vitrage haute performance et isolation thermique optimisée.",
    image: "https://images.unsplash.com/photo-1610120433992-814a4bc1856f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGZhY2FkZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1NzYxMzYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Casablanca Finance City, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "2,400 m²"
  },
  {
    id: 2,
    title: "Complexe Commercial Aluminium",
    description: "Façade aluminium moderne pour complexe commercial avec système de ventilation naturelle intégré et protection solaire adaptée au climat marocain.",
    image: "https://images.unsplash.com/photo-1667380188529-5d3637038590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWx1bWludW0lMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NTc2MTM5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Rabat, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "3,200 m²"
  },
  {
    id: 3,
    title: "Tour de Bureaux Vitrage Structurel",
    description: "Installation d'un mur-rideau complet pour tour de bureaux avec vitrage structurel haute performance et isolation acoustique renforcée.",
    image: "https://images.unsplash.com/photo-1723271198638-8035292089a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwZmFjYWRlfGVufDF8fHx8MTc1NzYxMzk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Marrakech, Maroc",
    year: "2023",
    type: "Commercial",
    surface: "4,800 m²"
  },
  {
    id: 4,
    title: "Centre Commercial Morocco Mall",
    description: "Rénovation complète des devantures d'un centre commercial avec structures aluminium modulaires et éclairage LED intégré.",
    image: "https://images.unsplash.com/photo-1598125870691-7ee99a664aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBhbHVtaW51bSUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzU3NjEzOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Casablanca, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "1,600 m²"
  },
  {
    id: 5,
    title: "Zone Industrielle Tanger Med",
    description: "Construction de façade métallique pour bâtiment industriel avec portes sectionnelles automatisées et ventilation haute performance.",
    image: "https://images.unsplash.com/photo-1751974429711-1938847c72e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBtZXRhbCUyMGZhY2FkZXxlbnwxfHx8fDE3NTc2MTM5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Tanger, Maroc",
    year: "2023",
    type: "Commercial",
    surface: "5,600 m²"
  },
  {
    id: 6,
    title: "Plaza Almazar Vitrage",
    description: "Aménagement d'une plaza commerciale avec grandes verrières aluminium et toiture transparente pour passage couvert climatisé.",
    image: "https://images.unsplash.com/photo-1699159247728-cf996b93946a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGxhemElMjBnbGFzcyUyMHdpbmRvd3N8ZW58MXx8fHwxNzU3NjEzOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Agadir, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "920 m²"
  },
  {
    id: 7,
    title: "Hôtel Luxe Atlas Façade Contemporaine",
    description: "Façade hôtelière moderne avec alternance de panneaux pleins et vitrés, système de brise-soleil orientable automatisé adapté au climat.",
    image: "https://images.unsplash.com/photo-1630048911157-66276d027a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJ1aWxkaW5nJTIwbW9kZXJuJTIwZmFjYWRlfGVufDF8fHx8MTc1NzYxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Fès, Maroc",
    year: "2023",
    type: "Commercial",
    surface: "2,800 m²"
  },
  {
    id: 8,
    title: "Restaurant Marina Vitrine Panoramique",
    description: "Création d'une vitrine panoramique pour restaurant avec vue sur marina, ouverture totale sur terrasse et système anti-effraction.",
    image: "https://images.unsplash.com/photo-1577948104566-040aed23dc79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYWx1bWludW0lMjBzdG9yZWZyb250fGVufDF8fHx8MTc1NzYxMzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Essaouira, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "180 m²"
  },
  {
    id: 9,
    title: "Banque Populaire Façade Sécurisée",
    description: "Façade renforcée pour agence bancaire avec vitrage anti-effraction et système de contrôle d'accès intégré à la menuiserie.",
    image: "https://images.unsplash.com/photo-1628089851892-6e37b1b70a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwYnVpbGRpbmclMjBnbGFzcyUyMGZhY2FkZXxlbnwxfHx8fDE3NTc2MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Meknès, Maroc",
    year: "2023",
    type: "Commercial",
    surface: "240 m²"
  },
  {
    id: 10,
    title: "Showroom Mercedes Prestige",
    description: "Showroom automobile avec grandes baies coulissantes motorisées et éclairage architectural LED pour mise en valeur des véhicules.",
    image: "https://images.unsplash.com/photo-1609342066876-dce9c0782fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG93cm9vbSUyMGFsdW1pbnVtJTIwd2luZG93c3xlbnwxfHx8fDE3NTc2MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Oujda, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "680 m²"
  },
  {
    id: 11,
    title: "Entrepôt Logistique Port Mohammed V",
    description: "Installation de portes sectionnelles industrielles en aluminium avec automatisation complète et résistance aux embruns marins.",
    image: "https://images.unsplash.com/photo-1672552226686-17ae189fbf2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhbHVtaW51bSUyMGRvb3JzfGVufDF8fHx8MTc1NzYxMzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Mohammedia, Maroc",
    year: "2023",
    type: "Commercial",
    surface: "3,400 m²"
  },
  {
    id: 12,
    title: "Siège OCP Entrée Prestige",
    description: "Réalisation de l'entrée principale d'un siège social avec hall d'accueil vitré et marquise aluminium design résistante au vent.",
    image: "https://images.unsplash.com/photo-1725868215889-6475ee230cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGVudHJhbmNlfGVufDF8fHx8MTc1NzYxMzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Khouribga, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "450 m²"
  },
  {
    id: 13,
    title: "Technopark Casablanca Façade Tech",
    description: "Façade moderne en aluminium pour bâtiment technologique avec système de ventilation intelligente et panneaux photovoltaïques intégrés. Design contemporain adapté aux entreprises tech.",
    image: "https://images.unsplash.com/photo-1700287375496-6836a5466662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBhbHVtaW51bSUyMGZhY2FkZXxlbnwxfHx8fDE3NTc2MTQ2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Technopark Casablanca, Maroc",
    year: "2024",
    type: "Commercial",
    surface: "1,800 m²"
  }
];

const residentialProjects = [
  {
    id: 14,
    title: "Villa Moderne Hay Riad",
    description: "Installation complète de menuiseries aluminium pour villa contemporaine. Fenêtres à rupture de pont thermique et volets intégrés avec domotique.",
    image: "https://images.unsplash.com/photo-1642887534384-81c81882dd1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFsdW1pbnVtJTIwd2luZG93c3xlbnwxfHx8fDE3NTc2MTM5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Rabat, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "320 m²"
  },
  {
    id: 15,
    title: "Résidence Luxe Atlas Golf",
    description: "Grandes baies coulissantes en aluminium pour résidence de luxe avec vue sur l'Atlas. Vitrage haute isolation et motorisation silencieuse.",
    image: "https://images.unsplash.com/photo-1731684449449-0156b49e3968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZ2xhc3MlMjBkb29yc3xlbnwxfHx8fDE3NTc2RTM5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Marrakech, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "280 m²"
  },
  {
    id: 16,
    title: "Appartement Marina Smir",
    description: "Conception et installation de garde-corps en aluminium avec design épuré pour appartement standing. Finition anodisée résistante aux embruns.",
    image: "https://images.unsplash.com/photo-1717117894919-e78099302a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJhbGNvbnklMjByYWlsaW5nfGVufDF8fHx8MTc1NzYxMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Tétouan, Maroc",
    year: "2023",
    type: "Résidentiel",
    surface: "180 m"
  },
  {
    id: 17,
    title: "Villa Palmeraie Clôture Design",
    description: "Clôture périmétrique en aluminium pour villa avec portail automatisé et système de vidéophonie intégré. Design contemporain lames verticales.",
    image: "https://images.unsplash.com/photo-1720116981234-59b667e5eb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGFsdW1pbnVtJTIwZmVuY2V8ZW58MXx8fHwxNzU3NjEzOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Marrakech, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "120 m"
  },
  {
    id: 18,
    title: "Villa Moderne Ain Diab",
    description: "Grandes baies vitrées coulissantes pour villa contemporaine face à l'océan avec seuil encastré et protection contre les embruns.",
    image: "https://images.unsplash.com/photo-1680034733365-ad7263988417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNsaWRpbmclMjBkb29yc3xlbnwxfHx8fDE3NTc2MTM5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Casablanca, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "85 m²"
  },
  {
    id: 19,
    title: "Appartement Twin Center",
    description: "Fermeture de balcon avec vitrage coulissant en aluminium pour appartement de standing. Solution adaptée aux variations climatiques.",
    image: "https://images.unsplash.com/photo-1750766810506-6bf2be760ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255JTIwZ2xhc3N8ZW58MXx8fHwxNzU3NjEzOTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Casablanca, Maroc",
    year: "2023",
    type: "Résidentiel",
    surface: "25 m²"
  },
  {
    id: 20,
    title: "Riad Pergola Bioclimatique",
    description: "Pergola bioclimatique en aluminium avec lames orientables automatisées. Système d'éclairage LED intégré et évacuation des eaux pluviales.",
    image: "https://images.unsplash.com/photo-1691352211368-f8beb40d70ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGVycmFjZSUyMHBlcmdvbGF8ZW58MXx8fHwxNzU3NjEzOTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Fès, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "45 m²"
  },
  {
    id: 21,
    title: "Villa Porte d'Entrée Sécurisée",
    description: "Porte d'entrée blindée en aluminium avec vitrage feuilleté et serrure multipoints. Design minimaliste avec éclairage d'accueil intégré.",
    image: "https://images.unsplash.com/photo-1708904236383-96bee341af22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGVudHJhbmNlJTIwZG9vcnxlbnwxfHx8fDE3NTc2MTM5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Salé, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "4 m²"
  },
  {
    id: 22,
    title: "Pavillon Bouskoura Garage",
    description: "Porte de garage sectionnelle en aluminium avec hublots et motorisation déportée. Résistance aux variations de température.",
    image: "https://images.unsplash.com/photo-1638519941118-ae3f7df0c14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGdhcmFnZSUyMGRvb3J8ZW58MXx8fHwxNzU3NjEzOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Casablanca, Maroc",
    year: "2023",
    type: "Résidentiel",
    surface: "20 m²"
  },
  {
    id: 22,
    title: "Villa Abri Piscine Oualidia",
    description: "Abri de piscine télescopique en aluminium et polycarbonate avec motorisation et automatisation complète. Protection UV renforcée.",
    image: "https://images.unsplash.com/photo-1710330758934-865ce4e4f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMGVuY2xvc3VyZXxlbnwxfHx8fDE3NTc2MTM5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "El Jadida, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "60 m²"
  },
  {
    id: 23,
    title: "Maison Véranda Ifrane",
    description: "Véranda contemporaine en aluminium avec toiture isolante et ventilation naturelle. Ouverture totale sur jardin avec baies escamotables.",
    image: "https://images.unsplash.com/photo-1646308070512-12b8f994ad18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zZXJ2YXRvcnklMjBnbGFzc3xlbnwxfHx8fDE3NTc2MTM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Ifrane, Maroc",
    year: "2023",
    type: "Résidentiel",
    surface: "35 m²"
  },
  {
    id: 25,
    title: "Résidence Auvent Souissi",
    description: "Auvent d'entrée en aluminium design avec éclairage LED intégré et évacuation des eaux pluviales. Protection moderne et élégante.",
    image: "https://images.unsplash.com/photo-1502258738801-89e429b20da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNhbm9weSUyMGFsdW1pbnVtfGVufDF8fHx8MTc1NzYxMzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Rabat, Maroc",
    year: "2024",
    type: "Résidentiel",
    surface: "12 m²"
  }
];

const allProjects = [...commercialProjects, ...residentialProjects];

const categories = ["Tous", "Commercial", "Résidentiel"];

export function Realisations() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  
  const getFilteredProjects = () => {
    if (activeCategory === "Tous") return allProjects;
    if (activeCategory === "Commercial") return commercialProjects;
    if (activeCategory === "Résidentiel") return residentialProjects;
    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h1 className="mb-6">
            Nos Projets en Aluminium
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Découvrez nos réalisations récentes en menuiserie et façade aluminium. 
            Chaque projet reflète notre expertise technique et notre attention aux détails 
            pour offrir des solutions durables et esthétiques.
          </p>
          
       
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-12 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Filtrer par :</span>
            {categories.map((category) => (
              <button
                key={category}
               
                
                className="text-sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {filteredProjects.length} projets affichés
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              location={project.location}
              year={project.year}
              type={project.type}
              surface={project.surface}
            />
          ))}
        </div>

     
       
      </div>
    </section>
  );
}