import { Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#C62828] rounded flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 17h2c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3h2c1.1 0 2-.9 2-2V9h10v6c0 1.1.9 2 2 2z"
                    fill="white"
                  />
                  <path d="M7 7h10v2H7z" fill="white" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg">Babina Tau Enterprises</h3>
              </div>
            </div>
            <p className="text-[#BBBBBB] text-sm mb-4">
              Licensed shuttle and tour operator based in Cape Town, offering private, group and
              corporate travel solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick links</h4>
            <div className="w-10 h-0.5 bg-[#C62828] mb-4"></div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-[#BBBBBB] hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[#BBBBBB] hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tours")}
                  className="text-[#BBBBBB] hover:text-white transition-colors text-sm"
                >
                  Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-[#BBBBBB] hover:text-white transition-colors text-sm"
                >
                  Why us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#BBBBBB] hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="mb-4">Top services</h4>
            <div className="w-10 h-0.5 bg-[#C62828] mb-4"></div>
            <ul className="space-y-3">
              <li>
                <button className="text-[#BBBBBB] hover:text-white transition-colors text-sm">
                  Airport transfers
                </button>
              </li>
              <li>
                <button className="text-[#BBBBBB] hover:text-white transition-colors text-sm">
                  Cape Point & Peninsula tour
                </button>
              </li>
              <li>
                <button className="text-[#BBBBBB] hover:text-white transition-colors text-sm">
                  Cape Winelands tour
                </button>
              </li>
              <li>
                <button className="text-[#BBBBBB] hover:text-white transition-colors text-sm">
                  Corporate shuttles
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="w-10 h-0.5 bg-[#C62828] mb-4"></div>
            <ul className="space-y-3 mb-6">
              <li className="text-[#BBBBBB] text-sm">+27 82 123 4567</li>
              <li className="text-[#BBBBBB] text-sm">bookings@babinatau.co.za</li>
              <li className="text-[#BBBBBB] text-sm">Cape Town, Western Cape</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-[#333333] hover:bg-[#C62828] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#333333] hover:bg-[#C62828] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#333333] hover:bg-[#C62828] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#777777] text-sm text-center md:text-left">
              © 2025 Babina Tau Enterprises (PTY) LTD. All rights reserved.
            </p>
            <div className="flex gap-4 text-[#777777] text-sm">
              <button className="hover:text-white transition-colors">Terms & Conditions</button>
              <span>•</span>
              <button className="hover:text-white transition-colors">Privacy Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
