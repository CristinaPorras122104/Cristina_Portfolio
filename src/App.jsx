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

  // ✅ SIMPLE FRONTEND-ONLY SUBMIT
  const submit = (e) => {
    e.preventDefault();
    setStatus("Message sent ✅");
    setForm({ name: "", email: "", message: "" });
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
        </div>
      </main>

      <section id="contact" className="section">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Let’s connect or work together.</p>
        </div>

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

          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </form>
      </section>

      <footer className="footer">
        <p>© {year} Tina. Built with React.</p>
      </footer>
    </div>
  );
}