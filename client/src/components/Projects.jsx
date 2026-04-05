function Projects() {
  const projects = [
    {
      title: "TradeTime",
      description:
        "A modern web application designed for trading workflows with a clean and responsive interface.",
      github: "https://github.com/CristinaPorras122104/Tradetime"
    },
    {
      title: "AwesomeTodos",
      description:
        "A task management app that allows users to organize and track daily tasks efficiently.",
      github: "https://github.com/CristinaPorras122104/awesometodos"
    },
    {
      title: "Kape Ta Iloilo",
      description:
        "A website inspired by local coffee culture in Iloilo, showcasing branding and user-friendly design.",
      github: "https://github.com/CristinaPorras122104/kape"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;