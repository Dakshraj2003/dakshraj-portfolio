// import React from "react";

// export default function Footer(){
//   return (
//     <footer className="mt-6 text-center small text-slate-400">
//       Thank You ❤️ • For visiting my portfolio.
//     </footer>
//   );
// }


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-green-500/20 text-center">
      {/* Message */}
      <p className="text-sm text-gray-400">
        Thank you for visiting my{" "}
        <span className="text-green-400 font-semibold">portfolio</span> ❤️
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="dakshrajamnerkar1@gmail.com"
          className="text-gray-400 hover:text-green-400 transition text-xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Dakshraj2003"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-green-400 transition text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dakshraj-amnerkar-623250230/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-green-400 transition text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Dakshraj Amnerkar • Built with{" "}
        <span className="text-green-400">Next.js</span> &{" "}
        <span className="text-green-400">Tailwind CSS</span>
      </p>
    </footer>
  );
}
