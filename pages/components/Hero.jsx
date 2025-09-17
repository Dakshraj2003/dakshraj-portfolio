import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-8 flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 max-w-6xl mx-auto"
    >
      {/* Avatar */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
        <Image
          src="/avatar1.jpg"
          alt="Dakshraj Amnerkar"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Intro */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">
          Dakshraj Amnerkar
        </h1>
        <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
          I’m a <span className="font-semibold">Frontend Developer</span> and{" "}
          <span className="font-semibold">Data Analyst</span> passionate about
          building scalable applications and turning raw data into actionable
          insights. Experienced with{" "}
          <span className="text-green-400">
            ReactJS, Redux, Node.js, SQL, Python, and Power BI
          </span>
          , I bring both technical expertise and problem-solving skills from my
          internships and projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
          <a
            className="inline-block bg-green-400 text-slate-900 px-6 py-2.5 rounded-md font-semibold shadow hover:bg-green-500 transition"
            href="/Dakshraj Amnerkar_cv.pdf"
            download
          >
            📄 Download CV
          </a>
          <a
            className="inline-block border border-green-400 text-green-400 px-6 py-2.5 rounded-md font-semibold hover:bg-green-400 hover:text-slate-900 transition"
            href="#contact"
          >
            ✉️ Contact
          </a>
        </div>
      </div>
    </section>
  );
}
