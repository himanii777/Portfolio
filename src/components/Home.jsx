// src/components/Home.jsx
import { useEffect } from "react";
import Hero from "./Hero.jsx";
import MLProjects from "./MLProjects.jsx";
import SoftwareProjects from "./SoftwareProjects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  // sections fade / pop in as they enter the viewport
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
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
