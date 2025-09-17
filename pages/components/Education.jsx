import React from "react";

export default function Education() {
  const education = [
    {
      degree: "BTech, Information Technology",
      school: "K.D.K. College of Engineering, Nagpur",
      result: "CGPA: 8.40",
      year: "2024",
    },
    {
      degree: "Class XII, Science",
      school: "Baba Nanak Sindhi Hindi Jr College",
      result: "63.85%",
      year: "2020",
    },
    {
      degree: "Class X",
      school: "Adarsh Vidya Mandir High School",
      result: "87.20%",
      year: "2018",
    },
  ];

  return (
    <section
      id="education"
      className="mt-6 px-4"
    >
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-green-500/30 pl-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Dot on timeline */}
              <span className="absolute -left-7 top-2 w-3 h-3 bg-green-400 rounded-full shadow-md shadow-green-500"></span>

              {/* Card */}
              <div className="bg-[#1e293b] border border-green-500/20 p-5 rounded-md hover:shadow-lg hover:shadow-green-500/20 transition">
                <h3 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm">{edu.school}</p>
                <p className="text-green-300 text-sm font-medium mt-1">
                  {edu.result} • {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
