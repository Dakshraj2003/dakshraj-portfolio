import React from "react";

export default function Navbar() {
  return (
    <nav className="top-0 w-full bg-[#161b22] border-b border-[#1f2937] shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 text-slate-900 font-bold text-lg shadow-md">
            DA
          </div>
          <div>
            <div className="font-semibold text-white">Dakshraj Amnerkar</div>
            <div className="text-xs text-slate-400">
               • React Developer
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-slate-300 font-medium">
          <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-green-400 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-green-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
