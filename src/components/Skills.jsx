// src/components/Skills.jsx

import "./Skills.css";
const programmingTools = [
  { name: "Python", icon: "python.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "Java", icon: "java.png" },
  { name: "C", icon: "C.png" },
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "SQL", icon: "sql.png" },
  { name: "MATLAB", icon: "matlab.jpg" },
];

const libraries = [
  { name: "PyTorch", icon: "pytorcj.png" },
  { name: "scikit-learn", icon: "sklearn.png" },
  { name: "OpenCV", icon: "opencv.png" },
  { name: "Pandas", icon: "pd.png" },
  { name: "React.js", icon: "react.png" },
  { name: "Express.js", icon: "express.png" },
  { name: "Node.js", icon: "nodejs.png" },
   { name: "Spring Boot", icon: "sb.webp" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "PostgreSQL", icon: "ps.png" },
  { name: "Docker", icon: "docker.webp" },
  { name: "Git", icon: "git.png" },
];

const groups = [
  {
    title: "Programming languages",
    items: programmingTools,
  },
  {
    title: "Developer tools/ libraries",
    items: libraries,
  },
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section__header">
        <h2>Skills</h2>
      </div>

      <div className="skills__grid">
        {groups.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3 className="skills__title">{group.title}</h3>
            <div className="skills__items">
              {group.items.map((skill) => (
                <div className="skills__item" key={skill.name}>
                  {skill.icon && (
                    <img
                      src={`/${skill.icon}`}
                      alt={skill.name}
                      className="skills__icon"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
