import useInView from '../hooks/useInView'

function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className={`hero fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <div className="hero-tag">open to work</div>
        <h1>Hi, I'm <span className="accent">Tony</span> —<br />a software engineering student.</h1>
        <p>Highly interested in backend engineering, infrastructure, and cloud technologies.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View projects</a>
          <a href="/tony's-resume.pdf" className="btn-secondary" target="_blank">Resume ↗</a>
        </div>
        <div className="hero-chips">
          <span className="chip chip-purple">Python</span>
          <span className="chip chip-blue">Flask</span>
          <span className="chip chip-green">PostgreSQL</span>
          <span className="chip chip-blue">React</span>
          <span className="chip chip-pink">Git/Github</span>
        </div>
      </div>
    </section>
  )
}

export default Hero