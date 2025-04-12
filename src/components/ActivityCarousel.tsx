
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample activity data
const activities = [
  {
    id: 1,
    title: "Formation Excel Avancée",
    description: "Session intensive sur les tableaux croisés dynamiques et les macros.",
    image: "public/images/activiteRecente/excelAvance.png",
    date: "15 Mars 2023",
  },
  {
    id: 2,
    title: "Atelier Montage Vidéo",
    description: "Techniques professionnelles de montage avec les outils modernes.",
    image: "public/images/activiteRecente/montageVidéo.png",
    date: "22 Avril 2023",
  },
  {
    id: 4,
    title: "Formation PowerPoint",
    description: "Créez des présentations professionnelles et impactantes.",
    image: "public/images/activiteRecente/powerpoint.png",
    date: "18 Juin 2023",
  },
  {
    id: 5,
    title: "Maintenance Informatique",
    description: "Diagnostiquer et résoudre les problèmes matériels et logiciels.",
    image: "public/images/activiteRecente/maintenance.png",
    date: "7 Juillet 2023",
  },
];

const ActivityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate items to show based on viewport width
  const getItemsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default
  };
  
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  
  // Reset items to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, itemsToShow]);
  
  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= activities.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, activities.length - itemsToShow) 
        : prevIndex - 1
    );
  };

  return (
    <div className="w-full relative py-8" onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
      {/* Navigation arrows */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-sam-blue hover:text-white transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-sam-blue hover:text-white transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Carousel container */}
      <div className="overflow-hidden" ref={carouselRef}>
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%] px-4"
              style={{ flex: `0 0 ${100 / itemsToShow}%` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span className="text-sm text-gray-500">{activity.date}</span>
                  <h3 className="text-xl font-semibold mb-2 text-sam-blue">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(activities.length - itemsToShow + 1) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-sam-blue" : "bg-gray-300 hover:bg-sam-blue-light"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityCarousel;
