import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Facebook, Linkedin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Effet de scroll pour sticky nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <header className="flex flex-col w-full">
      {/* Barre supérieure */}
      <div className="top-bar">
        <div className="flex items-center space-x-4">
          <a href="mailto:samdeglore@gmail.com" className="flex items-center hover:text-sam-blue-light">
            <Mail className="w-4 h-4 mr-1" />
            <span className="hidden md:inline">samdeglore@gmail.com</span>
          </a>
          <a href="tel:+123456789" className="flex items-center hover:text-sam-blue-light">
            <Phone className="w-4 h-4 mr-1" />
            <span className="hidden md:inline">+123 456 789</span>
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="social-icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="social-icon" />
          </a>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className={cn("nav-bar", scrolled && "shadow-lg")}>
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-sam-blue">
            <span className="text-sam-blue-light">SAM</span> de Gloire
          </div>
        </Link>

        {/* Bouton menu mobile */}
        <button 
          className="md:hidden text-sam-gray hover:text-sam-blue focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className={cn("nav-link", isActive('/') && "active")}>Accueil</Link>
          <Link to="/formation" className={cn("nav-link", isActive('/formation') && "active")}>Formations</Link>
          
          {isHomePage && (
            <>
              <ScrollLink to="Service" smooth duration={600} offset={-80} className="nav-link cursor-pointer">Services</ScrollLink>
              <ScrollLink to="Activite" smooth duration={600} offset={-80} className="nav-link cursor-pointer">Activités Récentes</ScrollLink>
              <ScrollLink to="Temoignage" smooth duration={600} offset={-80} className="nav-link cursor-pointer">Témoignages</ScrollLink>
            </>
          )}

          <Link to="/contact" className={cn("nav-link", isActive('/contact') && "active")}>Contact</Link>
        </div>

        {/* Menu mobile */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 z-40 md:hidden",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
        )}>
          <div className="flex flex-col py-2">
            <Link to="/" className="px-6 py-3 hover:bg-sam-gray-light" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/formation" className="px-6 py-3 hover:bg-sam-gray-light" onClick={() => setIsMenuOpen(false)}>Formations</Link>

            {isHomePage && (
              <>
                <ScrollLink to="Service" smooth duration={600} offset={-80} className="px-6 py-3 hover:bg-sam-gray-light cursor-pointer" onClick={() => setIsMenuOpen(false)}>Services</ScrollLink>
                <ScrollLink to="Activite" smooth duration={600} offset={-80} className="px-6 py-3 hover:bg-sam-gray-light cursor-pointer" onClick={() => setIsMenuOpen(false)}>Activités Récentes</ScrollLink>
                <ScrollLink to="Temoignage" smooth duration={600} offset={-80} className="px-6 py-3 hover:bg-sam-gray-light cursor-pointer" onClick={() => setIsMenuOpen(false)}>Témoignages</ScrollLink>
              </>
            )}

            <Link to="/contact" className="px-6 py-3 hover:bg-sam-gray-light" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
