"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#accueil"); // ✅ default section
  // const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { label: "Accueil", href: "/" },
    { label: "A Propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setActiveSection(href); // ✅ update active section
    setIsMenuOpen(false); // ✅ close mobile menu
  };

  return (
    <header className="bg-white border-t-4 border-[#ff914d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center md:border-b border-b-gray-300">
          <div className="w-40 h-40 flex items-center justify-center">
            <img src="/alumicraft_logo (1).png" alt="Logo" />
          </div>
        </div>

        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeSection === item.href
                    ? "text-[#ff914d] font-semibold" // ✅ Active style
                    : "text-gray-700 hover:text-[#ff914d]"
                }`}
                onClick={() => handleLinkClick(item.href)} // ✅ Set active
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/devis"
              className="bg-[#ff914d] text-white px-6 py-2 rounded-full text-sm font-medium"
              onClick={() => handleLinkClick("#contact")}
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none rounded-md"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    activeSection === item.href
                      ? "text-[#ff914d] font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleLinkClick(item.href)} // ✅ Set active
                >
                  {item.label}
                </Link>
              ))}
              {/* CTA Button - Mobile */}
              <div className="px-3 py-2">
                <Link
                  href="#contact"
                  className="bg-[#ff914d] text-white px-6 py-2 rounded-full text-sm font-medium"
                  onClick={() => handleLinkClick("#contact")}
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
