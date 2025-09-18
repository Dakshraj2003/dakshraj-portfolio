import React from "react";

const projects = [
  {
    title: "Cubicle: Workplace Efficiency System",
    timeframe: "3 months",
    desc: "Led the frontend development using ReactJS, building responsive and user-friendly interfaces. Collaborated closely with HR teams to design and implement performance evaluation dashboards that improved workplace transparency and efficiency. Streamlined workflows through intuitive UI components and contributed to strategic discussions on enhancing employee productivity.",
  },
  {
    title: "Dr. Scheduler : Streamlining Healthcare Booking Process",
    timeframe: "3 months",
    desc: "Developed a healthcare booking system using HTML, CSS, JavaScript, and PHP to simplify appointment scheduling. Optimized the booking process for accuracy and efficiency, integrated scheduling tools to manage patient appointments, and enhanced communication workflows by confirming bookings and providing essential updates to patients.",
  },
  {
    title: "Blog Application : Blogging Web Application",
    timeframe: "3 months",
    desc: "Built a full-stack blogging platform using ReactJS, Node.js, ExpressJS, MongoDB, and Firebase, with clean and responsive design. Implemented client-side routing with React Router to improve navigation, and used Redux for efficient state management to enhance performance and scalability. Ensured reliability by designing and executing unit tests, resulting in a robust and user-friendly application.",
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
