// import React from "react";

// const projects = [
//   {
//     title: "Sales Analysis: Combos & Customer Segments",
//     timeframe: "2 months",
//     desc: "Processed 100K+ records, merged datasets, built an interactive Power BI dashboard to visualize top-selling items and customer segments. Identified that 40% of revenue came from combos with 20% higher order value."
//   },
//   {
//     title: "Banking Services Data Analysis & Classification",
//     timeframe: "3 months",
//     desc: "Processed 600+ raw Excel files, cleaned & structured data, categorized services, performed EDA to find trends and anomalies."
//   },
//   {
//     title: "Cubicle: Elevating Workplace Efficiency System",
//     timeframe: "3 months",
//     desc: "Spearheaded frontend development, collaborated with HR, designed performance evaluation systems and presentations to improve workplace efficiency."
//   }
// ];

// export default function Projects(){
//   return (
//     <section className="section" id="projects">
//       <div className="card-title">Projects</div>
//       <div className="grid md:grid-cols-2 gap-4 mt-3">
//         {projects.map(p => (
//           <div key={p.title} className="p-4 rounded-md bg-[rgba(255,255,255,0.01)]">
//             <div className="font-semibold">{p.title}</div>
//             <div className="small">{p.timeframe}</div>
//             <p className="small mt-2">{p.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";

// const projects = [
//   {
//     title: "Sales Analysis: Combos & Customer Segments",
//     timeframe: "2 months",
//     desc: "Processed and cleaned 100K+ records from multiple datasets using Python and Excel. Designed an interactive Power BI dashboard to visualize key metrics, top-selling items, and customer segments.Merged and structured data to analyze customer behavior, sales trends, and menu performance.Identified that 40% of revenue came from combos, with an average 20% higher order value, enabling data-driven promotion strategies.Automated recurring data preparation workflows, reducing manual effort and ensuring consistency.Presented findings and actionable insights to stakeholders, supporting data-driven decision-making.",
          
//   },
//   {
//     title: "Banking Services Data Analysis & Classification",
//     timeframe: "3 months",
//     desc: "Processed 600+ raw Excel files, cleaned data, categorized services, and performed EDA for insights.Analyzed over 600 raw Excel files containing banking transactions, loans, and deposits by cleaning, structuring, and categorizing data into service types. Conducted exploratory data analysis (EDA) to uncover patterns, anomalies, and key performance metrics, delivering valuable insights to support data-driven decision-making. Built structured reports to highlight service performance trends and recommended improvements. Enhanced accuracy and efficiency of reporting by streamlining data handling processes.",
//   },
//   {
//     title: "Cubicle: Workplace Efficiency System",
//     timeframe: "3 months",
//     desc: "Developed React frontend, collaborated with HR, designed performance evaluation dashboards.Led the frontend development using ReactJS, building responsive and user-friendly interfaces. Collaborated closely with HR teams to design and implement performance evaluation dashboards that improved workplace transparency and efficiency. Streamlined workflows through intuitive UI components and contributed to strategic discussions on enhancing employee productivity.",
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="section" id="projects">
//       <div className="card-title">Projects</div>
//       <div className="grid sm:grid-cols-2 gap-4 mt-3">
//         {projects.map((p) => (
//           <div key={p.title} className="p-4 rounded-md bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] transition">
//             <div className="font-semibold">{p.title}</div>
//             <div className="small">{p.timeframe}</div>
//             <p className="small mt-2 text-justify md:text-left">{p.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

const projects = [
  {
    title: "Sales Analysis: Combos & Customer Segments",
    timeframe: "2 months",
    desc: "Processed and cleaned 100K+ records from multiple datasets using Python and Excel. Designed an interactive Power BI dashboard to visualize key metrics, top-selling items, and customer segments. Merged and structured data to analyze customer behavior, sales trends, and menu performance. Identified that 40% of revenue came from combos, with an average 20% higher order value, enabling data-driven promotion strategies. Automated recurring data preparation workflows, reducing manual effort and ensuring consistency. Presented findings and actionable insights to stakeholders, supporting data-driven decision-making.",
  },
  {
    title: "Banking Services Data Analysis & Classification",
    timeframe: "3 months",
    desc: "Analyzed over 600 raw Excel files containing banking transactions, loans, and deposits by cleaning, structuring, and categorizing data into service types. Conducted exploratory data analysis (EDA) to uncover patterns, anomalies, and key performance metrics. Built structured reports to highlight service performance trends and recommended improvements. Enhanced accuracy and efficiency of reporting by streamlining data handling processes.",
  },
  {
    title: "Cubicle: Workplace Efficiency System",
    timeframe: "3 months",
    desc: "Led the frontend development using ReactJS, building responsive and user-friendly interfaces. Collaborated closely with HR teams to design and implement performance evaluation dashboards that improved workplace transparency and efficiency. Streamlined workflows through intuitive UI components and contributed to strategic discussions on enhancing employee productivity.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#1e293b] border border-green-500/20 p-5 rounded-md 
                         hover:shadow-lg hover:shadow-green-500/20 transition"
            >
              <h3 className="font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-green-300 mb-3">{p.timeframe}</p>
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
