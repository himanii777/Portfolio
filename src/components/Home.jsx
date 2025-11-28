
// import { useEffect } from "react";
// import Hero from "./Hero.jsx";
// import Skills from "./Skills.jsx";
// import Experience from "./Experience.jsx";
// import MLProjects from "./MLProjects.jsx";
// import SoftwareProjects from "./SoftwareProjects.jsx";
// import Contact from "./Contact.jsx";

// const Home = () => {
//   useEffect(() => {
//     const sections = document.querySelectorAll(".section");
//     const reveals = document.querySelectorAll(".reveal");

//     const sectionObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("section--visible");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     sections.forEach((sec) => sectionObserver.observe(sec));

//     const revealObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal--visible");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     reveals.forEach((el) => revealObserver.observe(el));

//     return () => {
//       sectionObserver.disconnect();
//       revealObserver.disconnect();
//     };
//   }, []);

//   return (
//     <main>
//       <Hero />
//       <Skills />
//       <Experience />
//       <MLProjects />
//       <SoftwareProjects />
//       <section className="section education" id="education">
//         <div className="section__header">
//           <h2>Education</h2>
//           <p>
//             Double major in Aerospace Engineering and Computer Science at KAIST,
//             with a research-focused background from Korea Science Academy.
//           </p>
//         </div>
//       </section>
//       <Contact />
//     </main>
//   );
// };

// export default Home;
// src/components/Home.jsx
import { useEffect } from "react";
import Hero from "./Hero.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import MLProjects from "./MLProjects.jsx";
import FullstackProjects from "./FullstackProjects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const reveals = document.querySelectorAll(".reveal");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <MLProjects />
      <FullstackProjects />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;

