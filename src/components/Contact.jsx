import useInView from '../hooks/useInView'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

function Contact() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  return (
    <section id="contact" ref={ref} className={`contact fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="contact-inner">
        <div className="section-label">say hi</div>
        <h2>Get in touch</h2>
        <p>Open to internship opportunities and interesting projects. My inbox is always open.</p>
        <div className="contact-links">
          <a href="mailto:dangtt066@gmail.com" className="contact-pill">
            <FiMail size={16} color="#7c6ce8" />
            Email
          </a>
          <a href="https://github.com/dangtruong06" target="_blank" className="contact-pill">
            <FiGithub size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tony-dang11/" target="_blank" className="contact-pill">
            <FiLinkedin size={16} color="#0077b5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact