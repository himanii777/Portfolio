// src/components/Contact.jsx
const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__header">
        <h2>Contact</h2>
        <p>
          For internships, research, or collaborations, feel free to reach out.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__item">
          <h3>Email</h3>
          <a href="mailto:your.email@kaist.ac.kr">your.email@kaist.ac.kr</a>
        </div>

        <div className="contact__item">
          <h3>GitHub</h3>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            github.com/your-username
          </a>
        </div>

        <div className="contact__item">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/your-handle
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
