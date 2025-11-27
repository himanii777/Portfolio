// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="section hero" id="home">
      {/* LEFT: main text */}
      {/* <div className="hero__left">
        <p className="hero__tag">Machine Learning / Full stack</p>

        <h1 className="hero__name">Himani Paudayal</h1>

        <p className="hero__summary">
          I build and debug ML systems end-to-end: reinforcement learning for
          fault-tolerant drones, LLM and vision models, and the full-stack
          pieces that ship those models to real users.
        </p>

        <div className="hero__chips">
          <span className="hero__chip">LLMs &amp; representations</span>
          <span className="hero__chip">Vision &amp; generative models</span>
          <span className="hero__chip"> NLP &amp; control</span>
          <span className="hero__chip"> React+ Node &amp; control</span>
          <span className="hero__chip"> Springboot &amp; control</span>
        </div>

        <div className="hero__cta">
          <a href="#ml-projects" className="btn btn--primary">
            View ML projects
          </a>
          <a href="#software-projects" className="btn btn--ghost">
            View software projects
          </a>
        </div>
      </div> */}
      <div className="hero__left">
        {/* FLOATING SHAPES */}
        <div className="hero-shapes">
          <div className="shape shape--circle"></div>
          <div className="shape shape--circle-light"></div>
          <div className="shape shape--dots"></div>
        </div>

        <p className="hero__tag">Software / Machine Learning Engineer</p>

        <h1 className="hero__name">Himani Paudayal</h1>

        <p className="hero__summary">
          I build and debug ML systems end-to-end: reinforcement learning for
          fault-tolerant drones, LLM and vision models, and the full-stack
          pieces that ship those models to real users.
        </p>

        {/* TAGS */}
        <div className="hero__chips hero__chips--float">
          <span className="hero__chip">LLMs & representations</span>
          <span className="hero__chip">Vision & Generative Models</span>
          <span className="hero__chip">NLP</span>
          <span className="hero__chip">React+ Node</span>
          <span className="hero__chip">Springboot</span>
        </div>

        <div className="hero__cta">
          <a href="#ml-projects" className="btn btn--primary">
            View ML projects
          </a>
          <a href="#software-projects" className="btn btn--ghost">
            View software projects
          </a>
        </div>
      </div>

      {/* RIGHT: circle photo + animated orbit + about-me bubble */}
      <div className="hero__right">
        <div className="shape-flowers">
          <div className="flower-petal flower-petal--1"></div>
          <div className="flower-petal flower-petal--2"></div>
          <div className="flower-petal flower-petal--3"></div>
        </div>

        <div className="hero__avatar-shell">
          <div className="hero__avatar-glow" />

          {/* Orbiting dots */}
          <div className="hero__orbit">
            {/* <span className="hero__orbit-dot hero__orbit-dot--1" />
            <span className="hero__orbit-dot hero__orbit-dot--2" />
            <span className="hero__orbit-dot hero__orbit-dot--3" /> */}
            {/* <span className="hero__orbit-icon hero__orbit-icon--1">✧</span> */}
            {/* <span className="hero__orbit-icon hero__orbit-icon--2">✦</span>
            <span className="hero__orbit-icon hero__orbit-icon--3">✦</span> */}
          </div>

          {/* If you have a real photo, replace inner div with an <img> using hero__avatar-img */}
          <div className="hero__avatar-ring">
            <img
              src="/Himani.jpg"
              alt="Himani Paudayal"
              className="hero__avatar-img"
            />
            <div className="hero__avatar">{/* <span>HP</span> */}</div>
          </div>
        </div>

        <div className="hero__bubble-wrapper">
          <button className="hero__bubble-btn">✧ About me ✧</button>
          <div className="hero__bubble-card">
            <p className="hero__bubble-title">About Himani</p>
            <p className="hero__bubble-body">
              I&apos;m in my final semester at KAIST, working across RL, LLMs,
              and vision. I like projects where I can both push models and
              actually understand why they behave the way they do.
            </p>
            <ul className="hero__bubble-list">
              <li>Final-year undergraduate at KAIST.</li>
              <li>Research on fault-tolerant quadcopter control with RL.</li>
              <li>
                Experience across NLP, vision, and time-series plus full-stack.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
