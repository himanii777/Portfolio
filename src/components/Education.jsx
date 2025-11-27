// src/components/Education.jsx
import "./Education.css";

const educationEntries = [
  {
    id: "kaist",
    level: "University",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    location: "Daejeon, South Korea",
    period: "2022 – Present · Expected graduation June 2026",
    degree: "B.Sc. Double major in Aerospace Engineering and Computer Science",
    bullets: [
      "Focused on aerodynamics and aerospace-related applications.",
      "Research background in large language models, computer vision, and generative modeling.",
    ],
  },
  {
    id: "ksa",
    level: "High school",
    institution: "Korea Science Academy of KAIST",
    location: "Busan, South Korea",
    period: "Graduated 2022",
    degree: "Science-focused high school with advanced STEM curriculum",
    bullets: [
      "Built a strong foundation in mathematics, physics, and research-oriented study.",
    ],
  },
];

const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="section__header">
        <h2>Education</h2>
        <p>
          A STEM-focused path from Korea Science Academy to a double major at
          KAIST in Aerospace Engineering and Computer Science.
        </p>
      </div>

      <div className="education__grid">
        {educationEntries.map((ed) => (
          <article key={ed.id} className="education__card reveal reveal--up">
            <header className="education__header">
              <span className="education__level">{ed.level}</span>
              <h3 className="education__institution">{ed.institution}</h3>
              <div className="education__meta">
                <span>{ed.location}</span>
                <span>·</span>
                <span>{ed.period}</span>
              </div>
              <p className="education__degree">{ed.degree}</p>
            </header>

            <ul className="education__bullets">
              {ed.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
