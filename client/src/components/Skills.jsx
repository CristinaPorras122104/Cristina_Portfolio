function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;