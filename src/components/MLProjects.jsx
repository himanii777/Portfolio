// src/components/MLProjects.jsx
import { useNavigate } from "react-router-dom";
import { mlProjects } from "../data/mlProjects";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/ml/${project.slug || project.id}`);
  };

  return (
    <article className="project-card" onClick={goToDetail}>
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

const MLProjects = () => {
  return (
    <section className="section" id="ml-projects">
      <div className="section__header">
        <h2>Machine Learning Projects</h2>
        <p>
          I work across language models, generative systems, and vision architectures, with an interest in how these models represent information and how we can fine-tune or train them more reliably. My projects combine theory-driven insights with hands-on implementation across multiple AI domains.
        </p>
      </div>

      <div className="projects-grid">
        {mlProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MLProjects;
