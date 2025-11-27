// src/components/Experience.jsx

import "./Experience.css";
const experiences = [
  {
    id: "interactive-computing-lab",
    role: "Intern — Interactive Computing Lab",
    org: "KAIST",
    location: "Daejeon, South Korea",
    period: "Jul 2025 – Aug 2025",
    bullets: [
      "Deployed small language models on Snapdragon devices using pruning and quantization.",
      "Prototyped an Android chatbot using optimized on-device models for real-time inference.",
    ],
  },
  {
    id: "data-intelligence-lab",
    role: "Undergraduate Researcher — Data Intelligence Lab",
    org: "KAIST",
    location: "Daejeon, South Korea",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Proposed Spectral LoRA, assigning layer-wise ranks based on spectral gaps of base models.",
      "Analyzed how spectral gaps relate to LoRA’s limitations and parameter-efficient fine-tuning.",
    ],
  },
  {
    id: "3dt-cuop",
    role: "Intern — Machine Learning Division",
    org: "3DT",
    location: "Daejeon, South Korea",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Implemented motion deblurring for robotic vision with DeblurGAN and fine-tuning.",
      "Improved visual quality using dark channel estimation and GAN-based restoration.",
    ],
  },
  {
    id: "multimodal-ai-lab",
    role: "Data Annotator — Multimodal AI Lab",
    org: "KAIST",
    location: "Daejeon, South Korea",
    period: "Dec 2022 – Mar 2023, Dec 2023 – Mar 2024",
    bullets: [
      "Reviewed script quality and time alignment for video datasets.",
      "Annotated speaker labels and cleaned transcripts for multimodal AI experiments.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="section__header">
        <h2>Experience</h2>
      </div>

      <ol className="experience__list">
        {experiences.map((exp) => (
          <li className="experience__item reveal reveal--left" key={exp.id}>
            <div className="experience__marker" />
            <div className="experience__card">
              <header className="experience__card-header">
                <h3 className="experience__role">{exp.role}</h3>
                <div className="experience__meta">
                  <span>{exp.org}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
                <div className="experience__period">{exp.period}</div>
              </header>
              <ul className="experience__bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
