import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTours = () => {
    const element = document.getElementById("tours");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548766255-344f0e8085c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMG1vdW50YWlufGVufDF8fHx8MTc2MzQwODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cape Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE6E6] rounded-full mb-6">
            <span className="text-[#C62828]">Cape Town shuttles & tours</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Reliable transfers
            <br />
            across Cape Town.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#DDDDDD] mb-4">
            Airport pickups, private tours and corporate shuttles
          </p>
          <p className="text-lg md:text-xl text-[#DDDDDD] mb-8">
            with licensed, professional drivers.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C62828]" />
              <span className="text-[#DDDDDD]">24/7 booking support</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C62828]" />
              <span className="text-[#DDDDDD]">Airport, hotel and point to point transfers</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C62828]" />
              <span className="text-[#DDDDDD]">Private and group tours available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={scrollToContact}
              className="bg-[#C62828] hover:bg-[#C62828]/90 px-8 py-6"
            >
              Book a transfer
            </Button>
            <Button
              onClick={scrollToTours}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6"
            >
              View tour options
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2">
            <div className="bg-white/90 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-[#111111]">Rated 4.9 / 5 by travellers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="text-[#BBBBBB] mr-2">Popular:</span>
            <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#DDDDDD] rounded-full transition-colors">
              Airport transfers
            </button>
            <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#DDDDDD] rounded-full transition-colors">
              Private tours
            </button>
            <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#DDDDDD] rounded-full transition-colors">
              Corporate shuttles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
