import React from "react";

const skills = [
  "Python (Pandas, NumPy, Matplotlib, Seaborn)",
  "MySQL",
  "Power BI",
  "MS Excel (Advanced)",
  "Data Modeling",
  "EDA & Data Cleaning",
  "SQL Query Optimization",
  "Predictive Modeling",
  "React JS",
  "HTML",
  "CSS, Tailwind CSS",
  "Bootstrap",
];

export default function Skills() {
  return (
    <section id="skills" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Technical Skills
        </h2>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 text-sm font-medium rounded-md bg-[#1e293b] text-green-300 border border-green-500/30 hover:bg-green-500 hover:text-black transition duration-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
