import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C62828] rounded flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 17h2c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3h2c1.1 0 2-.9 2-2V9h10v6c0 1.1.9 2 2 2z"
                  fill="white"
                />
                <path d="M7 7h10v2H7z" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="font-semibold text-[#111111]">Babina Tau</h1>
              <p className="text-xs text-[#777777]">Shuttles & Tours</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#444444] hover:text-[#C62828] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#444444] hover:text-[#C62828] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("tours")}
              className="text-[#444444] hover:text-[#C62828] transition-colors"
            >
              Tours
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-[#444444] hover:text-[#C62828] transition-colors"
            >
              Why us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#444444] hover:text-[#C62828] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-[#C62828]" />
              <div>
                <p className="text-xs text-[#777777]">Call us</p>
                <p className="text-[#111111]">+27 79 419 4789</p>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#C62828] hover:bg-[#C62828]/90"
            >
              Book a transfer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-[#444444] hover:text-[#C62828] transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-[#444444] hover:text-[#C62828] transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-left text-[#444444] hover:text-[#C62828] transition-colors py-2"
              >
                Tours
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-left text-[#444444] hover:text-[#C62828] transition-colors py-2"
              >
                Why us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-[#444444] hover:text-[#C62828] transition-colors py-2"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <p className="text-xs text-[#777777] mb-1">Call us</p>
                <p className="text-[#111111] mb-4">+27 82 123 4567</p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#C62828] hover:bg-[#C62828]/90"
                >
                  Book a transfer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
