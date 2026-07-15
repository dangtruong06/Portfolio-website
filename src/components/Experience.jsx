import useInView from '../hooks/useInView'
import { experience } from '../data/experience'

function Experience(){
    const [ref, isVisible] = useInView({ threshold: 0.3 })

    return(
        <section id='experience' ref={ref} className={`experience fade-up ${isVisible ? 'visible': ''}`}>
            <div className="experience-inner">
                <div className="section-header">
                <div className="section-label">background</div>
                <h2>Experience & Certifications</h2>
                <p>Where I've been.</p>
                </div>
                <div className="experience-list">
                {experience.map((item) => (
                    <div key={item.id} className="experience-item">
                    <div className="exp-dot" style={{ background: item.accent }}></div>
                    <div className="exp-content">
                        <div className="exp-role">{item.role}</div>
                        <div className="exp-company">{item.company}</div>
                        <div className="exp-date">{item.date}</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Experience