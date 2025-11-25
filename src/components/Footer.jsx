// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      <p className="footer__secondary">
        Built with React &amp; Vite. Designed to showcase ML and software
        engineering work.
      </p>
    </footer>
  );
};

export default Footer;
