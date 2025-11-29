// src/components/FullstackProjects.jsx

import { useNavigate } from "react-router-dom";
import { fullstackProjects } from "../data/fullstackProjects";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/fullstack/${project.slug || project.id}`);
  };

  return (
    <article
      className="project-card reveal reveal--up"
      onClick={goToDetail}
    >
      <header className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__meta">{project.category}</p>
      </header>

      <p className="project-card__description">{project.shortDescription}</p>

      {project.tech && project.tech.length > 0 && (
        <ul className="project-card__tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className="project-card__links">
        <button
          type="button"
          className="project-card__link"
          onClick={(e) => {
            e.stopPropagation();
            goToDetail();
          }}
        >
          View details
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};

const FullstackProjects = () => {
  return (
    <section className="section projects-section" id="fullstack-projects">
      {/* ADDED reveal classes here */}
      <div className="section__header reveal reveal--up">
        <h2>Full-Stack / Software Projects</h2>
        {/* <p>
          These projects focus on end-to-end structure: clear REST APIs, organized
          backend logic, and predictable data flow to the frontend. The aim is to
          build systems that are easy to understand, trace, and maintain.
        </p> */}
      </div>

      {/* ADDED reveal classes here */}
      <div className="projects-grid reveal reveal--up">
        {fullstackProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FullstackProjects;
