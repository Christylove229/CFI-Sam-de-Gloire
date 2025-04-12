
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-sam-blue py-16 px-4">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre parcours de formation.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-sam-blue mb-8">Informations de Contact</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-sam-gray-light rounded-full mr-4">
                    <MapPin className="text-sam-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Notre Adresse</h3>
                    <p className="text-gray-600">123 Avenue Example, Ville, Pays</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-sam-gray-light rounded-full mr-4">
                    <Mail className="text-sam-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">samdeglore@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-sam-gray-light rounded-full mr-4">
                    <Phone className="text-sam-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-sam-gray-light rounded-full mr-4">
                    <Clock className="text-sam-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h30 - 17h30</p>
                    <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-sam-blue rounded-full text-white hover:bg-sam-blue-light transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-sam-blue rounded-full text-white hover:bg-sam-blue-light transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://whatsapp.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-sam-blue rounded-full text-white hover:bg-sam-blue-light transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-sam-blue mb-8">Envoyez-nous un message</h2>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 bg-sam-gray-light">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-sam-blue mb-8 text-center">Notre localisation</h2>
          <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden h-[400px] w-full">
            {/* Placeholder for map - would be replaced with actual map embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Carte interactive ici</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
