// src/components/Home.jsx
import Hero from "./Hero.jsx";
import MLProjects from "./MLProjects.jsx";
import SoftwareProjects from "./SoftwareProjects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
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
