const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero__main reveal reveal--up reveal-delay-1">
        <p className="hero__eyebrow">Machine Learning · Full Stack</p>
        <h1 className="hero__title">Himani Paudayal</h1>
        <p className="hero__summary">
          I’m a fourth-year KAIST student working with Deep Learning, NLP, LLMs, Computer Vision, and Generative Models. I also build full-stack applications with React, Node.js, and Spring Boot, bringing together AI models and real-world products.
        </p>

        <div className="hero__tags reveal reveal-delay-2">
          <span className="hero__tag">LLMs and representations</span>
          <span className="hero__tag">Vision and generative models</span>
          <span className="hero__tag">NLP</span>
          <span className="hero__tag">Full-stack development</span>
          <span className="hero__tag">Backend engineering</span>
        </div>

        <div className="hero__actions reveal reveal-delay-3">
          <a href="#ml-projects" className="btn btn--primary">
            View ML Projects
          </a>
          <a href="#software-projects" className="btn btn--primary">
            View Full Stack Projects
          </a>
        </div>
      </div>

   
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

     

        <p className="hero__card-text">
          Outside of work, I’m someone who genuinely enjoys learning new things.I start most days with a much-needed morning coffee, and when I’m not coding, you’ll probably find me painting.
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
