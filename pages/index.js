// import Head from "next/head";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Education from "../components/Education";
// import Certifications from "../components/Certifications";
// import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Dakshraj Amnerkar — Data Analyst & React Developer</title>
//         <meta name="description" content="Portfolio of Dakshraj Amnerkar — Data Analyst skilled in Python, SQL, Power BI, and React.js. View projects, experience and contact." />
//         <meta name="keywords" content="Data Analyst, React developer, Power BI, SQL, Python, Dakshraj Amnerkar" />
//         <meta name="author" content="Dakshraj Amnerkar" />
//         <meta property="og:title" content="Dakshraj Amnerkar — Portfolio" />
//         <meta property="og:description" content="Data Analyst & React Developer — portfolio with projects, experience and contact." />
//         <meta property="og:image" content="/dakshraj_cv.pdf" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="container">
//         <Navbar />
//         <main>
//           <Hero />
//           <About />
//           <Skills />
//           <Experience />
//           <Projects />
//           <Education />
//           <Certifications />
//           <ContactForm />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }

<h1 className="text-4xl font-bold text-red-500">Tailwind Works!</h1>
import Head from "next/head";
// import Navbar from "../components/navbar";
import Navbar from "./components/Navbar";
// import Hero from "../components/Hero";
import Hero from "./components/Hero";
// import About from "../components/About";
import About from "./components/About";
// import Skills from "../components/Skills";
import Skills from "./components/Skills";
// import Experience from "../components/Experience";
import Experience from "./components/Experience";
// import Projects from "../components/Projects";
import Projects from "./components/Projects";
// import Education from "../components/Education";
import Education from "./components/Education";
// import Certifications from "../components/Certifications";
import Certifications from "./components/Certifications";
// import ContactForm from "../components/ContactForm";
import ContactForm from "./components/ContactForm";
// import Footer from "../components/Footer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dakshraj Amnerkar — Portfolio</title>
        <meta name="description" content="Portfolio of Dakshraj Amnerkar — Data Analyst skilled in Python, SQL, Power BI, and React.js." />
        <meta name="keywords" content="Data Analyst, React developer, Power BI, SQL, Python, Dakshraj Amnerkar" />
        <meta name="author" content="Dakshraj Amnerkar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
