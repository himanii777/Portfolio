// src/components/MLProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { mlProjects } from "../data/mlProjects";

import spectralHeatmap from "../assets/ml/spectral-lora-heatmap.png";
import spectralAverageGaps from "../assets/ml/spectral-lora-average-gaps.png";
import styleclipProblem from "../assets/ml/styleclip-problem.png";
import styleclipResults from "../assets/ml/styleclip-results.png";
import deblurganBeforeAfter from "../assets/ml/deblurgan-before-after.png";
import threeHanArchitecture from "../assets/ml/3han-architecture.png";
import threeHanConfusion from "../assets/ml/3han-confusion-matrix.png";
import tsLoss from "../assets/ml/transformer-timeseries-loss.png";
import tsPredictions from "../assets/ml/transformer-timeseries-predictions.png";

const imageSources = {
  "spectral-lora": {
    heatmap: spectralHeatmap,
    "average-gaps": spectralAverageGaps,
  },
  "styleclip-gating": {
    "problem-statement": styleclipProblem,
    results: styleclipResults,
  },
  deblurgan: {
    "before-after": deblurganBeforeAfter,
  },
  "3han-fake-news": {
    architecture: threeHanArchitecture,
    "confusion-matrix": threeHanConfusion,
  },
  "transformer-timeseries": {
    "loss-curve": tsLoss,
    predictions: tsPredictions,
  },
};

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

const ImageSection = ({ projectId, images }) => {
  if (!images || images.length === 0) return null;

  const sourcesForProject = imageSources[projectId] || {};

  return (
    <section className="project-detail__subsection">
      <h3>Figures / visualizations</h3>
      <div className="project-detail__images">
        {images.map((img, idx) => {
          const src = sourcesForProject[img.key];

          return (
            <div
              key={img.key || idx}
              className="project-detail__image-placeholder"
            >
              <div className="project-detail__image-box">
                {src ? (
                  <img
                    src={src}
                    alt={img.title}
                    className="project-detail__image"
                  />
                ) : (
                  <span>Image placeholder</span>
                )}
              </div>
              <div className="project-detail__image-meta">
                <p className="project-detail__image-title">{img.title}</p>
                <p className="project-detail__image-desc">{img.description}</p>
                {img.suggestedFilename && (
                  <p className="project-detail__image-filename">
                    Suggested file: <code>{img.suggestedFilename}</code>
                  </p>
                )}
              </div>
            </div>
          );
        })}
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

        {/* <div className="project-detail__links">
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
        </div> */}
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
          <p className="project-detail__overview">{project.longDescription}</p>
        </section>
      )}

      <BulletList title="Problem" items={project.problems} />
      <BulletList title="Approach" items={project.approach} />
      <BulletList title="Results" items={project.results} />

      <ImageSection projectId={project.id} images={project.imagePlaceholders} />
    </main>
  );
};

export default MLProjectDetail;
