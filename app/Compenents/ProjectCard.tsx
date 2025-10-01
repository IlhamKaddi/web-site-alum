"use client";
import { Calendar, MapPin, Building } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
  type: string;
  surface?: string;
}

export function ProjectCard({ title, description, image, location, year, type, surface }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden">
        <img
            src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <p className="bg-white/90 text-gray-900">
            {type}
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          
          {surface && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>{surface}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}