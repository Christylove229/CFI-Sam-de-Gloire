
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityCarousel from "@/components/ActivityCarousel";
import ServiceCard from "@/components/ServiceCard";
import { 
  BookOpen, 
  MonitorPlay, 
  Headphones, 
  FileSpreadsheet, 
  VideoIcon, 
  Wrench,
  Users,
  Award,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 text-white text-center">
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 z-0" 
          style={{ backgroundImage: "url('/images/background-header.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="relative z-10">
          {/* Ton contenu ici */}
          <h1 className="text-4xl font-bold">Centre de Formation SAM de Gloire</h1>
          <p className="mt-4 text-xl">Votre partenaire pour acquérir les compétences professionnelles les plus demandées.</p>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Découvrir nos formations</button>
            <button className="ml-4 bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100">Nous contacter</button>
          </div>
        </div>
      </section>

      
      {/* Services Section */}
      <section id="Service" className="py-16 px-4 bg-sam-gray-light">
        <div className="container mx-auto">
          <h2 className="section-title">Nos Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Formations Bureautiques" 
              description="Maîtrisez les logiciels essentiels comme Word, Excel, PowerPoint et Publisher."
              icon={<FileSpreadsheet size={40} />}
              backgroundImage="/images/services/formationbureautique.jpg"
            />
            
            <ServiceCard 
              title="Techniques Radiophoniques" 
              description="Apprenez les techniques de production et de diffusion radiophonique professionnelles."
              icon={<Headphones size={40} />}
              backgroundImage="/images/services/techniqueradio.jpg"
            />
            
            <ServiceCard 
              title="Montage Audiovisuel" 
              description="Développez vos compétences en montage vidéo et audio avec des outils modernes."
              icon={<VideoIcon size={40} />}
              backgroundImage="/images/services/montagevisuel.jpg"
            />
            
            <ServiceCard 
              title="Maintenance Informatique" 
              description="Diagnostiquez et résolvez les problèmes matériels et logiciels de vos appareils."
              icon={<Wrench size={40} />}
              backgroundImage="/images/services/maintenanceinfor.jpg"
            />
            
            <ServiceCard 
              title="Gravure CD/VCD/DVD" 
              description="Créez et reproduisez des supports multimédias professionnels."
              icon={<MonitorPlay size={40} />}
              backgroundImage="/images/services/gravureCD.jpg"
            />
      
            <ServiceCard 
              title="Location de sonorisations et vente d'articles bureautiques" 
              description="Louez du matériel de sonorisation professionnel et achetez vos fournitures de bureau au meilleur prix."
              icon={<Headphones size={40} />} 
              backgroundImage="/images/services/sonobureau.jpg"
            />

          </div>
        </div>
      </section>
      
      {/* Activités Récentes Section */}
      <section id="Activite" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">Activités Récentes</h2>
          <ActivityCarousel />
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="py-16 px-4 bg-sam-blue text-white">
        <div className="container mx-auto">
          <h2 className="section-title text-white">Pourquoi Nous Choisir?</h2>
          <div className="section-title text-white after:bg-white"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <GraduationCap size={60} className="mb-4 text-sam-blue-light" />
              <h3 className="text-xl font-semibold mb-2">Formateurs Experts</h3>
              <p>Des professionnels qualifiés et expérimentés dans leurs domaines respectifs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Award size={60} className="mb-4 text-sam-blue-light" />
              <h3 className="text-xl font-semibold mb-2">Formations Certifiantes</h3>
              <p>Obtenez des certifications reconnues pour valoriser votre parcours professionnel.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Users size={60} className="mb-4 text-sam-blue-light" />
              <h3 className="text-xl font-semibold mb-2">Accompagnement Personnalisé</h3>
              <p>Un suivi individualisé pour garantir votre réussite à chaque étape de votre formation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="Temoignage" className="py-16 px-4 bg-sam-gray-light">
        <div className="container mx-auto">
          <h2 className="section-title">Témoignages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sam-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Marie Santé</h4>
                  <p className="text-sm text-gray-500">Formation Excel Avancé</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La formation était très bien structurée. J'ai pu rapidement mettre en pratique mes nouvelles compétences dans mon entreprise."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sam-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jean Dupont</h4>
                  <p className="text-sm text-gray-500">Techniques Radiophoniques</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Les formateurs sont de vrais professionnels qui partagent leur expérience. Je me sens prêt à travailler dans une station de radio."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sam-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  CL
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Claire Leblanc</h4>
                  <p className="text-sm text-gray-500">Montage Vidéo</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Une excellente approche pédagogique qui m'a permis d'apprendre à mon rythme. Je recommande vivement cette formation."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-sam-blue text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à développer vos compétences?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez-nous dès aujourd'hui pour commencer votre parcours vers l'excellence professionnelle.
          </p>
          <Link to="/contact" className="bg-white text-sam-blue hover:bg-sam-gray-light font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 inline-block text-lg">
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
