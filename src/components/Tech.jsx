
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiPytest,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiReact,
  SiClaude,
  SiLinux,
  SiPostman
} from 'react-icons/si';

function TechStack() {
  const stack = [
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      ],
    },
    {
      category: 'Backend & Frameworks',
      items: [
        { name: 'Flask', icon: SiFlask, color: '#ffffff' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      ],
    },
    {
      category: 'Testing & Tools',
      items: [
        { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Claude', icon: SiClaude, color: '#D97757' },
        { name: 'pytest', icon: SiPytest, color: '#0A9EDC' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Docker Compose', icon: SiDocker, color: '#2496ED' },
      ],
    },
  ];

  return (
    <section className="tech-stack">
      <div className="section-header">
        <div className="section-label">Tech stack</div>
        <h2>Tools I work with</h2>
      </div>
      <div className="tech-stack-grid">
        {stack.map(({ category, items }) => (
          <div className="tech-card" key={category}>
            <p className="tech-card-title">{category}</p>
            <div className="tech-card-icons">
              {items.map(({ name, icon: Icon, color }) => (
                <div className="tech-icon-box" key={name} title={name}>
                  <Icon size={34} color={color} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;