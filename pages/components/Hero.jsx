// import React from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       className="section flex flex-col md:flex-row items-start gap-6"
//       id="home"
//     >
//       <div className="relative w-28 h-28 rounded-lg overflow-hidden">
//         {/* Place public/avatar.jpg or remove to use initials */}
//         <Image
//           src="/avatar1.jpg"
//           alt="avatar"
//           fill
//           style={{ objectFit: "cover" }}
//           priority
//           onError={() => {}}
//         />
//       </div>

//       <div className="flex-1">
//         <h1 className="text-2xl font-bold">Dakshraj Amnerkar</h1>
//         <p className="small mt-2 text-justify md:text-left">
//           I’m Dakshraj Amnerkar, a passionate Frontend Developer and Data
//           Analyst skilled in building scalable web applications and turning data
//           into actionable insights. I have hands-on experience with ReactJS,
//           Redux, Node.js, and RESTful APIs for creating responsive UIs, as well
//           as Python, SQL, Power BI, and Excel for data cleaning, visualization,
//           and predictive modeling. With internships in both frontend development
//           and data analytics, I bring versatility, problem-solving skills, and a
//           drive to learn and deliver impactful solutions.
//         </p>

//         <div className="flex gap-3 mt-4">
//           <a
//             className="inline-block bg-cyan-400 text-slate-900 px-4 py-2 rounded-md font-semibold"
//             href="/Dakshraj Amnerkar_cv.pdf"
//             download
//           >
//             Download CV
//           </a>
//           <a
//             className="inline-block border border-[rgba(255,255,255,0.06)] px-4 py-2 rounded-md"
//             href="#contact"
//           >
//             Contact
//           </a>
//         </div>

//         <p className="small mt-3">
//           Email:{" "}
//           <a className="link" href="mailto:dakshrajamnerkar1@gmail.com">
//             dakshrajamnerkar1@gmail.com
//           </a>{" "}
//           • Phone: +91-7249731976
//         </p>

//         <p className="small mt-2">
//           <a
//             className="link"
//             href="https://github.com/Dakshraj2003"
//             target="_blank"
//             rel="noreferrer"
//           >
//             GitHub
//           </a>{" "}
//           ·{" "}
//           <a
//             className="link"
//             href="http://www.linkedin.com/in/dakshraj-amnerkar-623250230"
//             target="_blank"
//             rel="noreferrer"
//           >
//             LinkedIn
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }


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
