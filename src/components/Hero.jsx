// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">KAIST · ML · Full Stack</p>
        <h1 className="hero__title">
          <span>Himani Paudayal</span>
        </h1>
        <p className="hero__subtitle">
          I am currently in my final semester as an undergraduate at KAIST with a double major in Aerospace Engineering and Computer Science. My experience spans deep learning, NLP, large language models, computer vision, fine-tuning techniques, and generative models. In addition to my AI research, I develop full-stack web applications using React and Node.js, integrating machine learning capabilities with practical web development to create seamless connections between AI models and user-facing platforms.
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
          {/* <span>• Software Engineering</span> */}
          <span>• Machine Learning </span>
          <span>• Full-stack (React-Node-SpringBoot)</span>
        </div>
      </div>

      {/* <div className="hero__side">
        <div className="hero__card">
          <p className="hero__card-title">Currently working on</p>
          <p className="hero__card-body">
            RL controller for a quadcopter that can keep flying even with
            actuator failures and external disturbances.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
