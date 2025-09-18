import React from "react";

const experiences = [
  {
    role: "ReactJS Developer Intern",
    company: "I Loma Technology Services Pvt. Ltd., Nagpur",
    date: "Jan 2024 - Mar 2024",
    bullets: [
      "Developed and deployed responsive React applications with seamless API integration.",
      "Collaborated with UI/UX teams to deliver intuitive, user-friendly interfaces.",
      "Implemented state management and reusable components to enhance scalability.",
      "Debugged and optimized code, improving application performance and reliability.",
      "Worked in an Agile environment, contributing to efficient teamwork and timely project delivery.",
    ],
  },
  
  {
    role: "Frontend developer Intern",
    company: " Ank Hub Technology Services Pvt. Ltd.",
    date: "Feb 2022 - Apr 2022",
    bullets: [
      "Expertly integrated HTML, CSS, and JavaScript to develop responsive and robust websites.",
      "Spearheaded brainstorming sessions, contributing innovative ideas for new website functionalities.",
      "Architected and delivered high-quality websites, portals, and web applications for a diverse client base.",
      "Collaborated with cross-functional teams to ensure seamless project execution and timely delivery.",
      "Optimized website performance and improved user experience through efficient code practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-green-500/30 pl-6 space-y-8">
          {experiences.map((e, index) => (
            <div key={index} className="relative">
              {/* Dot on timeline */}
              <span className="absolute -left-7 top-2 w-3 h-3 bg-green-400 rounded-full shadow-md shadow-green-500"></span>

              <div className="bg-[#1e293b] border border-green-500/20 p-5 rounded-md hover:shadow-lg hover:shadow-green-500/20 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {e.role}{" "}
                    <span className="text-slate-400 text-sm">— {e.company}</span>
                  </h3>
                  <p className="text-green-300 text-sm font-medium">{e.date}</p>
                </div>

                {/* Bullet Points (fixed alignment) */}
                <ul className="mt-3 list-disc list-inside space-y-2 text-slate-300 text-sm">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
