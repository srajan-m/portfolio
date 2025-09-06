import React from "react";

const Header = () => (
  <header className="bg-gradient-to-r from-beige-100 to-beige-300 shadow-sm fixed top-0 left-0 w-full z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl md:text-2xl font-bold text-purple-700 tracking-tight hover-glow">
      My Portfolio
      </h2>
      <nav className="space-x-6 text-sm md:text-base font-medium text-gray-800">
        <a href="#about" className="hover:text-purple-600 transition duration-200">About</a>
        <a href="#projects" className="hover:text-purple-600 transition duration-200">Projects</a>
        <a href="#contact" className="hover:text-purple-600 transition duration-200">Contact</a>
      
      </nav>
    </div>
  </header>
);

// ✅ This is the missing line
export default Header;