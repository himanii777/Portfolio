const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero__main reveal reveal--up reveal-delay-1">
        <p className="hero__eyebrow">Software / Machine Learning Engineer</p>
        <h1 className="hero__title">Himani Paudayal</h1>
        <p className="hero__summary">
          I build and debug ML systems end-to-end: reinforcement learning for
          fault-tolerant drones, LLM and vision models, and the full-stack
          pieces that ship those models to real users.
        </p>

        <div className="hero__tags reveal reveal-delay-2">
          <span className="hero__tag">LLMs and representations</span>
          <span className="hero__tag">Vision and generative models</span>
          <span className="hero__tag">NLP</span>
          <span className="hero__tag">React and Node</span>
          <span className="hero__tag">Spring Boot</span>
        </div>

        <div className="hero__actions reveal reveal-delay-3">
          <a href="#ml-projects" className="btn btn--primary">
            View ML projects
          </a>
          <a href="#software-projects" className="btn btn--primary">
            View software projects
          </a>
        </div>
      </div>

      {/* <aside className="hero__side-card reveal reveal--right reveal-delay-2">
        <button className="hero__pill">About me</button>

        <div className="hero__cat-mug">
          <div className="hero__cat-head">
            <span className="hero__cat-ear hero__cat-ear--left"></span>
            <span className="hero__cat-ear hero__cat-ear--right"></span>
            <span className="hero__cat-eye hero__cat-eye--left"></span>
            <span className="hero__cat-eye hero__cat-eye--right"></span>
          </div>
          <div className="hero__cat-mug-body"></div>
          <div className="hero__cat-mug-handle"></div>
        </div>

        <div className="hero__photo-frame">
          <img src="/Himani.jpg" alt="Himani Paudayal" />
        </div>

        <div className="hero__badge-row">
          <p className="hero__badge">ML and full stack</p>
          <span className="hero__status-dot" />
        </div>

        <p className="hero__card-text">
          Final-year undergraduate at KAIST, working on fault-tolerant control
          for quadcopters with reinforcement learning and building the
          full-stack pieces that bring ML to real users.
        </p>

        <div className="hero__meta">
          <span className="hero__meta-pill">KAIST</span>
          <span className="hero__meta-pill">RL for robotics</span>
          <span className="hero__meta-pill">LLMs and vision</span>
        </div>
      </aside> */}
      <aside className="hero__side-card reveal reveal--right reveal-delay-2">
        <button className="hero__pill">About me</button>

        <div className="hero__mug">
          <div className="hero__heart"></div>
          <div className="hero__mug-body"></div>
          <div className="hero__mug-handle"></div>
        </div>

        <div className="hero__photo-frame">
          <img src="/Himani.jpg" alt="Himani Paudayal" />
        </div>

        <div className="hero__badge-row">
          <p className="hero__badge">ML and full stack</p>
          <span className="hero__status-dot" />
        </div>

        <p className="hero__card-text">
          Final-year undergraduate at KAIST, working on fault-tolerant control
          for quadcopters with reinforcement learning and building the
          full-stack pieces that bring ML to real users.
        </p>

        {/* <div className="hero__meta">
          <span className="hero__meta-pill">KAIST</span>
          <span className="hero__meta-pill">RL for robotics</span>
          <span className="hero__meta-pill">LLMs and vision</span>
        </div> */}
      </aside>
    </section>
  );
};

export default Hero;
