
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileSpreadsheet, 
  FileType, 
  BarChart, 
  Printer, 
  Headphones, 
  VideoIcon, 
  Wrench, 
  FileCheck,
  MonitorPlay
} from "lucide-react";
import { Link } from "react-router-dom";

const Formation = () => {
  // Formation categories
  const categories = [
    {
      id: "bureautique",
      title: "Bureautique",
      description: "Maîtrisez les outils essentiels pour l'environnement professionnel",
      modules: [
        {
          id: "word",
          title: "Microsoft Word",
          icon: <FileType size={36} className="text-sam-blue" />,
          description: "De la création de documents simples aux documents complexes avec styles, références, index et table des matières.",
          duration: "30 heures",
        },
        {
          id: "excel",
          title: "Microsoft Excel",
          icon: <BarChart size={36} className="text-sam-blue" />,
          description: "Tableurs, formules avancées, tableaux croisés dynamiques, graphiques et macros pour l'analyse de données.",
          duration: "40 heures",
        },
        {
          id: "powerpoint",
          title: "Microsoft PowerPoint",
          icon: <FileSpreadsheet size={36} className="text-sam-blue" />,
          description: "Création de présentations professionnelles avec animations, transitions et contenus multimédias.",
          duration: "20 heures",
        },
        {
          id: "publisher",
          title: "Microsoft Publisher",
          icon: <Printer size={36} className="text-sam-blue" />,
          description: "Conception de supports de communication: brochures, affiches, cartes de visite et newsletters.",
          duration: "25 heures",
        },
      ],
    },
    {
      id: "audiovisuel",
      title: "Techniques Radiophoniques et Montage Audiovisuel",
      description: "Développez vos compétences dans le domaine des médias",
      modules: [
        {
          id: "radio",
          title: "Techniques Radiophoniques",
          icon: <Headphones size={36} className="text-sam-blue" />,
          description: "Animation d'émissions, prise de son, mixage, édition et production radiophonique.",
          duration: "45 heures",
        },
        {
          id: "montage",
          title: "Montage Audiovisuel",
          icon: <VideoIcon size={36} className="text-sam-blue" />,
          description: "Maîtrise des logiciels de montage, effets spéciaux, transitions, étalonnage et mixage audio.",
          duration: "50 heures",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance et Gravure",
      description: "Solutions techniques pour le matériel informatique et les supports multimédias",
      modules: [
        {
          id: "maintenance",
          title: "Maintenance Informatique",
          icon: <Wrench size={36} className="text-sam-blue" />,
          description: "Diagnostic et résolution de problèmes matériels et logiciels, installation d'OS et réseaux basics.",
          duration: "35 heures",
        },
        {
          id: "gravure",
          title: "Gravure CD/VCD/DVD",
          icon: <MonitorPlay size={36} className="text-sam-blue" />,
          description: "Techniques de gravure professionnelle, duplication, création de jaquettes et étiquettes.",
          duration: "15 heures",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-sam-blue py-16 px-4">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nos Formations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Des programmes pédagogiques adaptés pour développer vos compétences professionnelles et personnelles.
          </p>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sam-blue mb-6">
            Formations Professionnelles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Nos formations sont conçues pour répondre aux besoins du marché du travail actuel. 
            Chaque module est dispensé par des formateurs expérimentés et se concentre sur 
            l'acquisition de compétences pratiques.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <a 
                key={category.id} 
                href={`#${category.id}`}
                className="py-2 px-4 bg-sam-gray-light hover:bg-sam-blue hover:text-white rounded-full transition-colors duration-300"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Formation Categories */}
      {categories.map((category) => (
        <section 
          key={category.id} 
          id={category.id} 
          className={`py-16 px-4 ${
            category.id === "audiovisuel" ? "bg-sam-gray-light" : "bg-white"
          }`}
        >
          <div className="container mx-auto">
            <h2 className="section-title">{category.title}</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              {category.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.modules.map((module) => (
              <div 
                key={module.id}
                className="relative rounded-lg shadow-md overflow-hidden card-hover border border-gray-100 bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/formations/${module.id}.png)`
                }}
              >
                {/* Overlay sombre pour lisibilité */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Contenu lisible sans flou */}
                <div className="relative z-10 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/80 text-black rounded-full p-2">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{module.title}</h3>
                      <p className="text-sm">{module.duration}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{module.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-white/80 flex items-center">
                      <FileCheck size={16} className="mr-1" />
                      Certificat inclus
                    </span>
                    <Link 
                      to="/contact" 
                      className="text-white bg-sam-blue hover:bg-sam-blue-light px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      S'inscrire
                    </Link>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-sam-blue text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Besoin d'une formation personnalisée?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nous pouvons adapter nos programmes à vos besoins spécifiques, 
            que ce soit pour une formation individuelle ou pour votre équipe.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-sam-blue hover:bg-sam-gray-light font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 inline-block text-lg"
          >
            Demander un devis
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Formation;
