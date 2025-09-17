// import React from "react";

// export default function About() {
//   return (
//     <section className="section" id="about">
//       <div className="card-title">About</div>
//       <p className="small text-justify md:text-left">
//         Hi, I’m Dakshraj Amnerkar 👋 I’m a Frontend Developer and Data Analyst
//         passionate about creating user-friendly applications and deriving
//         meaningful insights from data. I have hands-on experience with ReactJS,
//         Redux, Node.js, Python, SQL, Power BI, and Excel, gained through
//         internships and real-world problem-solving. I thrive in collaborative
//         environments, enjoy tackling challenges, and continuously work on
//         improving my technical and analytical skills. 
//         Outside of work, I love cricket, traveling, and fitness.
//       </p>
//     </section>
//   );
// }


import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          About Me
        </h2>

        {/* Content */}
        <p className="text-slate-300 leading-relaxed text-justify">
          Hi, I’m{" "}
          <span className="text-green-300 font-semibold">
            Dakshraj Amnerkar 👋
          </span>
          . I’m a{" "}
          <span className="text-green-400 font-semibold">
            Frontend Developer
          </span>{" "}
          and{" "}
          <span className="text-green-400 font-semibold">Data Analyst</span>{" "}
          passionate about creating user-friendly applications and deriving
          meaningful insights from data.
        </p>

        <p className="text-slate-300 leading-relaxed text-justify mt-4">
          I have hands-on experience with{" "}
          <span className="text-green-300">
            ReactJS, Redux, Node.js, Python, SQL, Power BI, and Excel
          </span>{" "}
          gained through internships and real-world problem-solving. I thrive in
          collaborative environments, enjoy tackling challenges, and
          continuously work on improving my technical and analytical skills.
        </p>

        <p className="text-slate-300 leading-relaxed text-justify mt-4">
          Outside of work, I love{" "}
          <span className="text-green-300 font-medium">
            cricket, traveling, and fitness
          </span>
          .
        </p>
      </div>
    </section>
  );
}
