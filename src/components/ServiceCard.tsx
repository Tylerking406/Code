import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  badge: {
    text: string;
    color: string;
    bgColor: string;
  };
  image: string;
}

export function ServiceCard({ title, description, badge, image }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-[#E0E0E0] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#E0E0E0]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs ${badge.bgColor} ${badge.color}`}
          >
            {badge.text}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl mb-3 text-[#111111]">{title}</h3>
        <p className="text-[#666666] mb-6">{description}</p>
        <Button
          variant="default"
          className="w-full bg-[#C62828] hover:bg-[#C62828]/90 group"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
