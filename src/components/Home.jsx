import { useEffect } from "react";
import Hero from "./Hero.jsx";
import MLProjects from "./MLProjects.jsx";
import SoftwareProjects from "./SoftwareProjects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const reveals = document.querySelectorAll(".reveal");

    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(sec => sectionObserver.observe(sec));

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    reveals.forEach(el => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <MLProjects />
      <SoftwareProjects />
      <Contact />
    </main>
  );
};

export default Home;
