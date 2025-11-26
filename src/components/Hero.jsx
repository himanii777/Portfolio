// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="section hero" id="home">
      {/* Left column: title + summary + buttons */}
      <div className="hero__col hero__col--left">
        <p className="hero__tag">Software / Machine Learning Engineer</p>

        <h1 className="hero__heading">
          <span className="hero__heading-main">Himani Paudayal</span>
        </h1>

        <p className="hero__summary">
          I build and debug ML systems end-to-end: reinforcement learning for
          fault-tolerant drones, LLM and vision models, and the full-stack
          pieces that ship those models to real users.
        </p>

        <div className="hero__cta">
          <a href="#ml-projects" className="btn btn--primary">
            View ML projects
          </a>
          <a href="#software-projects" className="btn btn--ghost">
            View software projects
          </a>
        </div>
      </div>

      {/* Center column: animated circle photo */}
      <div className="hero__col hero__col--center">
        <div className="hero__avatar-shell">
          <div className="hero__avatar-glow" />
          {/* If you have a real photo, replace the inner div with:
              <img src="/your-photo.png" alt="Himani Paudayal" className="hero__avatar-img" />
           */}
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <span>HP</span>
            </div>
          </div>
        </div>

        <div className="hero__center-chips">
          <span className="hero__chip">RL &amp; control</span>
          <span className="hero__chip">LLMs &amp; representations</span>
          <span className="hero__chip">Vision &amp; generative models</span>
        </div>
      </div>

      {/* Right column: About-me block like Mitchell's background section */}
      <div className="hero__col hero__col--right">
        <div className="hero__about-card">
          <p className="hero__about-title">Here is a little background</p>
          <p className="hero__about-text">
            I&apos;m in my final semester at KAIST, working across RL, LLMs,
            and vision. I like projects where I can both push models and
            understand why they behave the way they do.
          </p>
          <ul className="hero__about-points">
            <li>Final-year undergraduate at KAIST.</li>
            <li>Research on fault-tolerant quadcopter control with RL.</li>
            <li>
              Experience with NLP, vision, and time-series work plus full-stack
              development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
