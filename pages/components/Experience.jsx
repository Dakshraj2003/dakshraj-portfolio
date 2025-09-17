// import React from "react";

// const experiences = [
//   {
//     role: "Data Analyst Intern",
//     company: "Eliora Technologies Pvt Ltd., Nagpur",
//     date: "Feb 2025 - Jul 2025",
//     bullets: [
//       "Analyzed complex datasets to uncover business insights and support data-driven decision-making.",
//       "Developed predictive models to identify trends and improve operational efficiency.",
//       "Performed SQL queries and data joins across multiple sources for reporting and analysis.",
//       "Created interactive dashboards using Power BI.",
//       "Collaborated with cross-functional teams in Agile environment."
//     ]
//   },
//   {
//     role: "ReactJS Developer Intern",
//     company: "I Loma Technology Services Pvt. Ltd., Nagpur",
//     date: "Jan 2024 - Mar 2024",
//     bullets: [
//       "Developed and deployed responsive React applications with seamless API integration.",
//       "Collaborated with UI/UX teams to deliver intuitive, user-friendly interfaces.",
//       "Implemented state management and reusable components to enhance scalability.",
//       "Debugged and optimized code, improving application performance and reliability.",
//       "Worked in an Agile environment, contributing to efficient teamwork and timely project delivery."
//     ]
//   }
// ];

// export default function Experience(){
//   return (
//     <section className="section" id="experience">
//       <div className="card-title">Experience</div>
//       <div className="mt-3 space-y-4">
//         {experiences.map(e => (
//           <div key={e.role}>
//             <div className="font-semibold">{e.role} <span className="small">— {e.company}</span></div>
//             <div className="small">{e.date}</div>
//             <ul className="mt-2 list-disc ml-5 space-y-1">
//               {e.bullets.map((b,i) => <li key={i} className="small text-justify md:text-left">{b}</li>)}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Eliora Technologies Pvt Ltd., Nagpur",
    date: "Feb 2025 - Jul 2025",
    bullets: [
      "Analyzed complex datasets to uncover business insights and support data-driven decision-making.",
      "Developed predictive models to identify trends and improve operational efficiency.",
      "Performed SQL queries and data joins across multiple sources for reporting and analysis.",
      "Created interactive dashboards using Power BI.",
      "Collaborated with cross-functional teams in Agile environment.",
    ],
  },
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
