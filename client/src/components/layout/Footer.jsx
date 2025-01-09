
import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#040507] text-white">
      <div className="max-w-[1440px] mx-auto px-20 lg:px-20">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start py-12 border-b border-gray-700">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-white text-2xl font-bold flex items-center">
              <img src="/LOGOw.png" alt="logo" className="" />
              
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              An AI powered social media analytics tool.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center py-6">
          <p className="text-gray-400 text-sm">
            © 2025 Groow. All rights reserved
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/teja-pola/Level-Supermind.git"
              className="text-gray-400 hover:text-white transition duration-200">
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200">
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#409E0F] text-white p-3 rounded-full shadow-md hover:bg-[#green] transition duration-200">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
