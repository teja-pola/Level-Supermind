import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-green-500 cursor-pointer flex gap-2 items-center">
          <img src="/LOGO.png" alt="Groow" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center flex-1 justify-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-300 hover:text-[#409E0F] transition-colors">
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-300 hover:text-[#409E0F] transition-colors">
            Features
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-gray-300 hover:text-[#409E0F] transition-colors">
            Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-[#409E0F] transition-colors">
            Contact
          </button>
        </nav>

        {/* Analyze Button */}
        <Link
          to="/chat"
          className="bg-[#409E0F] text-white font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors">
          ANALYZE →
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 text-white px-4 py-6">
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left mb-4">
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left mb-4">
            Features
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="block w-full text-left mb-4">
            Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left mb-4">
            Contact
          </button>
          <Link
            to="/analyze"
            className="block bg-green-500 text-center text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            ANALYZE →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
