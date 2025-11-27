// src/components/Contact.jsx
const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__header">
        <h2>Contact</h2>
        <p>For internships, research, or collaborations, feel free to reach out.</p>
      </div>

      <div className="contact__grid">

        <div className="contact__item">
          <div className="contact__row">

            <a href="mailto:himanipaudayal07@kaist.ac.kr" className="contact__icon-link">
              <img src="/email.jpg" alt="email icon" className="contact__icon" />
            </a>

            <span>himanipaudayal07@kaist.ac.kr</span>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__row">

            <a
              href="https://github.com/himanii777"
              target="_blank"
              rel="noreferrer"
              className="contact__icon-link"
            >
              <img src="/github.jpg" alt="github icon" className="contact__icon" />
            </a>

            <span>himanii777</span>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__row">

            <a
              href="https://www.linkedin.com/in/himani-paudayal-226b602a9/"
              target="_blank"
              rel="noreferrer"
              className="contact__icon-link"
            >
              <img src="/linkedin.png" alt="linkedin icon" className="contact__icon" />
            </a>

            <span>himani-paudayal</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
