// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">KAIST · Software & ML</p>
        <h1 className="hero__title">
          <span>Hi, I’m</span> <span className="hero__name">[Your Name]</span>
        </h1>
        <p className="hero__subtitle">
          Senior undergraduate at KAIST. I build full-stack software and
          machine learning systems, currently focused on{" "}
          <strong>fault-tolerant drones using reinforcement learning</strong>.
        </p>

        <div className="hero__cta">
          <a href="#ml-projects" className="btn btn--primary">
            View ML Projects
          </a>
          <a href="#software-projects" className="btn btn--ghost">
            View Software Projects
          </a>
        </div>

        <div className="hero__meta">
          <span>• Software Engineering</span>
          <span>• Machine Learning / RL</span>
          <span>• Full-stack (React / Node)</span>
        </div>
      </div>

      <div className="hero__side">
        <div className="hero__card">
          <p className="hero__card-title">Currently working on</p>
          <p className="hero__card-body">
            RL controller for a quadcopter that can keep flying even with
            actuator failures and external disturbances.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
