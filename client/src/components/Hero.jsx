import profile from "../assets/gradpic.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="tag">Hello, I’m</p>
          <h1>Cristina Bernadette Porras</h1>
          <h2>3rd Year BSIT Student | Aspiring MERN Stack Developer</h2>
          <p>
            I create modern, responsive, and practical web applications while
            continuously improving my skills in full-stack development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/CristinaPorras122104"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://web.facebook.com/cristina.bernadette.2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a href="mailto:cristinatorreporras@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Cristina" />
        </div>
      </div>
    </section>
  );
}

export default Hero;