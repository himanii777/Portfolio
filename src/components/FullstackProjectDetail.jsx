// src/components/FullstackProjectDetail.jsx

import { useParams, Link } from "react-router-dom";
import { fullstackProjects } from "../data/fullstackProjects";

const BulletList = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="project-detail__subsection">
      <h3>{title}</h3>
      <ul className="project-detail__list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

const ImageSection = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="project-detail__subsection">
      <h3>Demo / screenshots</h3>
      <div className="project-detail__images">
        {images.map((img, idx) => (
          <div key={idx} className="project-detail__image-placeholder">
            <div className="project-detail__image-box">
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.title || "Project screenshot"}
                  className="project-detail__image"
                />
              ) : (
                <span>Image placeholder</span>
              )}
            </div>
            <div className="project-detail__image-meta">
              {img.title && (
                <p className="project-detail__image-title">{img.title}</p>
              )}
              {img.description && (
                <p className="project-detail__image-desc">
                  {img.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FullstackProjectDetail = () => {
  const { projectId } = useParams();

  const project =
    fullstackProjects.find((p) => p.slug === projectId) ||
    fullstackProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="section section--visible">
        <p>Project not found.</p>
        <Link
          to="/"
          className="project-card__link"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          ← Back to portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="section section--visible project-detail">
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
                className="btn btn--primary"
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>

      {project.longDescription && (
        <section className="project-detail__subsection">
          <h3>Overview</h3>
          <p className="project-detail__overview">
            {project.longDescription}
          </p>
        </section>
      )}

      <BulletList title="Approach" items={project.approach} />
      <BulletList title="Demo / usage" items={project.demo} />

      <ImageSection images={project.images} />
    </main>
  );
};

export default FullstackProjectDetail;
