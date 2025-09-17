// import React from "react";

// const certs = [
//   {title: "Career Young Professional Certificate - TCS", date: "Oct 2021"},
//   {title: "Data Analytics for job simulation – Accenture", date: "Dec 2023"},
//   {title: "Career Young Professional Certificate – TCS", date: "Oct 2021"},
//   {title: "ReactJS Frontend Development – Udemy", date: "Jan 2023"},
//   {title: "ReactJS Essential Training – TCS", date: "Dec 2023"},
// ];

// export default function Certifications(){
//   return (
//     <section className="section" id="certifications">
//       <div className="card-title">Certifications</div>
//       <ul className="mt-2 list-disc ml-5 space-y-1">
//         {certs.map(c => <li key={c.title} className="small">{c.title} <span className="small text-slate-400">• {c.date}</span></li>)}
//       </ul>
//     </section>
//   );
// }


import React from "react";

const certs = [
  { title: "Career Young Professional Certificate - TCS", date: "Oct 2021" },
  { title: "Data Analytics Job Simulation – Accenture", date: "Dec 2023" },
  { title: "ReactJS Frontend Development – Udemy", date: "Jan 2023" },
  { title: "ReactJS Essential Training – TCS", date: "Dec 2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Certifications
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-green-500/30 pl-6 space-y-6">
          {certs.map((c, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <span className="absolute -left-7 top-2 w-3 h-3 bg-green-400 rounded-full shadow-md shadow-green-500"></span>

              {/* Card */}
              <div className="bg-[#1e293b] border border-green-500/20 p-5 rounded-md hover:shadow-lg hover:shadow-green-500/20 transition">
                <h3 className="text-white text-base md:text-lg font-semibold">
                  {c.title}
                </h3>
                <p className="text-green-300 text-sm font-medium mt-1">
                  {c.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
