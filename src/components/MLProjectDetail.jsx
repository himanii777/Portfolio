// src/components/MLProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { mlProjects } from "../data/mlProjects";

const BulletList = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="project-detail__subsection">
      <h3>{title}</h3>
      <ul className="project-detail__list">
        {items.map((item) => (
          <li key={item.slice(0, 32)}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

const ImagePlaceholders = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="project-detail__subsection">
      <h3>Figures / visualizations (to be added)</h3>
      <div className="project-detail__images">
        {images.map((img) => (
          <div key={img.key} className="project-detail__image-placeholder">
            <div className="project-detail__image-box">
              <span>Image placeholder</span>
            </div>
            <div className="project-detail__image-meta">
              <p className="project-detail__image-title">{img.title}</p>
              <p className="project-detail__image-desc">{img.description}</p>
              <p className="project-detail__image-filename">
                Suggested file: <code>{img.suggestedFilename}</code>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MLProjectDetail = () => {
  const { projectId } = useParams();
  const project =
    mlProjects.find((p) => p.slug === projectId) ||
    mlProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="section">
        <p>Project not found.</p>
        <Link
          to="/"
          className="project-card__link"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="section project-detail">
      <div className="project-detail__header">
        <Link to="/" className="project-detail__back">
          ← Back to portfolio
        </Link>

        <h1 className="project-detail__title">{project.title}</h1>

        {project.shortTagline && (
          <p className="project-detail__tagline">{project.shortTagline}</p>
        )}

        <div className="project-detail__meta">
          {project.category && (
            <span className="project-detail__pill">{project.category}</span>
          )}
          {project.tech &&
            project.tech.map((t) => (
              <span
                key={t}
                className="project-detail__pill project-detail__pill--tech"
              >
                {t}
              </span>
            ))}
        </div>

        <div className="project-detail__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              View GitHub
            </a>
          )}
          {project.extraLinks &&
            project.extraLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>

      {project.longDescription && (
        <section className="project-detail__subsection">
          <h3>Overview</h3>
          <p className="project-detail__overview">{project.longDescription}</p>
        </section>
      )}

      <BulletList title="Problem" items={project.problems} />
      <BulletList title="Approach" items={project.approach} />
      <BulletList title="Results" items={project.results} />

      <ImagePlaceholders images={project.imagePlaceholders} />
    </main>
  );
};

export default MLProjectDetail;
