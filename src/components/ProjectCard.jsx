function ProjectCard({ project }){
    return(
      <div className="project-card" style={{ borderTop: `3px solid ${project.accent}` }}>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tech.map((item) => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" className="project-link">GitHub ↗</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" className="project-link">Live ↗</a>
          )}
        </div>
      </div>
    )
}

export default ProjectCard 