// src/components/Home.jsx
import { useEffect } from "react";
import Hero from "./Hero.jsx";
import MLProjects from "./MLProjects.jsx";
import SoftwareProjects from "./SoftwareProjects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
          }
        });
      },
      {
        threshold: 0.25, // ~25% of section must be visible
      }
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
