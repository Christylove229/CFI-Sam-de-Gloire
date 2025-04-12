import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage?: string; // ✅ Ajout de la propriété
  className?: string;
}

const ServiceCard = ({ title, description, icon, backgroundImage, className }: ServiceCardProps) => {
  return (
    <div
      className={cn("service-card relative overflow-hidden rounded-lg shadow-lg", className)}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }
          : {}
      }
    >
      {/* Overlay sombre */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 z-0" />
      )}

      {/* Contenu de la carte */}
      <div className="relative z-10 p-6">
        <div className="mb-4 text-sam-blue-light">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 drop-shadow-lg">{title}</h3>
        <p className="drop-shadow-md">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
