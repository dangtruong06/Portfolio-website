import useInView from '../hooks/useInView'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {   
  const [ref, isVisible] = useInView({ threshold: 0.3 })

  return (
    <section id="projects" ref={ref} className={`projects fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="section-header section-header-row">
        <div>
          <div className="section-label">work</div>
          <h2>Projects</h2>
          <p>Things I've built.</p>
        </div>
        <a href="https://github.com/dangtruong06" target="_blank" rel="noopener noreferrer" className="view-more-link">
          View more on GitHub →
        </a>

      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Projects