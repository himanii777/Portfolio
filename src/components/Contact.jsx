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
          <a href="mailto: himanipaudayal07@kaist.ac.kr">himanipaudayal07@kaist.ac.kr</a>
        </div>

        <div className="contact__item">
          <h3>GitHub</h3>
          <a
            href="https://github.com/himanii777"
            target="_blank"
            rel="noreferrer"
          >
            github.com/himanii777
          </a>
        </div>

        <div className="contact__item">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/himani-paudayal-226b602a9/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/himani-paudayal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
