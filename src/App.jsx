import { useState } from "react";

export default function App() {
  const year = new Date().getFullYear();

  const skills = ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "UI/UX"];

  const projects = [
    {
      title: "TradeTime",
      desc: "React/Vite project — trading time planner or tool (GitHub repo).",
      tags: ["React", "Vite", "JavaScript"],
      link: "https://github.com/CristinaPorras122104/TradeTime",
    },
    {
      title: "Kape (Coffee Guide)",
      desc: "Coffee guide website with pages for coffee types, shops, and local beans.",
      tags: ["HTML", "CSS", "Responsive"],
      link: "https://github.com/CristinaPorras122104/kape",
    },
    {
      title: "AwesomeToDos",
      desc: "To-do list app (front/back). GitHub repo with client/server code.",
      tags: ["JavaScript", "Full Stack"],
      link: "https://github.com/CristinaPorras122104/awesometodos",
    },
  ];

  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://cristina-portfolio-s24y.onrender.com/api/contact",  {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
     

      const data = await res.json();

      if (data.ok) {
        setStatus("Message sent ✅ Check your Gmail");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed ❌");
      }
    } catch (err) {
      setStatus("Failed ❌ (backend not running)");
    }
  };

  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#top">
          Tina<span>.</span>
        </a>
        <nav className="navlinks">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a className="btn small" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="hero">
        <div className="hero-left">
          <p className="pill">BSIT Student • Aspiring Web Developer</p>
          <h1>
            Hi, I’m <span className="grad">Cristina Bernadette Porras</span>.
          </h1>
          <p className="sub">
            I build clean, responsive websites and web apps. Currently learning full-stack (MERN)
            and improving my portfolio step by step.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Hire / Collaborate
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <p className="stat-num">3+</p>
              <p className="stat-label">Projects</p>
            </div>
            <div className="stat">
              <p className="stat-num">React</p>
              <p className="stat-label">Focused</p>
            </div>
            <div className="stat">
              <p className="stat-num">2026</p>
              <p className="stat-label">Building</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="card glow">
            <p className="card-title">What I do</p>
            <ul className="checklist">
              <li>Responsive web pages</li>
              <li>Simple web apps (CRUD)</li>
              <li>Modern UI + clean layout</li>
              <li>Deploy projects online</li>
            </ul>
            <div className="mini">
              <div className="mini-box">
                <p className="mini-top">Currently learning</p>
                <p className="mini-main">MERN Stack</p>
              </div>
              <div className="mini-box">
                <p className="mini-top">Goal</p>
                <p className="mini-main">Internship-ready</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="projects" className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p>Some works and school projects I’ve built recently.</p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="pcard">
              <div className="pcard-top">
                <h3>{p.title}</h3>
                <a className="plink" href={p.link} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
              <p className="pdesc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Tech I use + currently improving.</p>
        </div>

        <div className="skills">
          {skills.map((s) => (
            <div key={s} className="skill">
              {s}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <h2>About</h2>
          <p>A bit about me.</p>
        </div>

        <div className="about">
          <div className="about-card">
            <h3>Profile</h3>
            <p>
              I’m Tina (Cristina Bernadette Porras), a BSIT student building projects to strengthen my
              skills in web development. I like modern, clean UI and practical systems.
            </p>
          </div>

          <div className="about-card">
            <h3>What I’m looking for</h3>
            <p>Internship opportunities, freelance web work, or collaboration on web apps.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Let’s connect or work together.</p>
        </div>

        <div className="contact-grid">
          {/* CONTACT DETAILS */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Details</h3>

              <p>
                <strong>Mobile:</strong>{" "}
                <a href="tel:09501442291" className="contact-link">
                  09501442291
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:cristinatorreporras@gmail.com" className="contact-link">
                  cristinatorreporras@gmail.com
                </a>
              </p>

              <div className="socials">
                <a
                  href="https://www.facebook.com/share/1CCTZ5mwmz/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔵 Facebook
                </a>

                <a
                  href="https://www.instagram.com/tina_porras21"
                  target="_blank"
                  rel="noreferrer"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>

          {/* ✅ CONNECTED FORM */}
          <form className="form" onSubmit={submit}>
            <div className="row">
              <input
                className="input"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
              />
              <input
                className="input"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
            </div>

            <textarea
              className="input textarea"
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={onChange}
            />

            <button className="btn" type="submit">
              Send Message
            </button>

          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {year} Tina. Built with React.</p>
      </footer>
    </div>
  );
}