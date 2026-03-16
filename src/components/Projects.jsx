const projects = [
  {
    title: 'PureClimate',
    description:
      'Developed an interactive climate change awareness website using HTML, CSS, and JavaScript  to visualize and analyze historical CO₂ data. Integrated Java-based data analysis to calculate the rate of CO₂ growth over centuries and displayed results through dynamic charts and interactive visualizations. The website featured a pie chart of greenhouse gas composition, sector-based emission breakdowns, and explanations of key climate science terminology, helping users understand the causes, effects, and human impact of climate change through engaging, data-driven insights. ',

    tech: ['HTML', 'CSS', 'JavaScript', 'Java'],
    link: 'https://github.com/karu-007/PureClimate.git',
    image: "/project1.png"
  },
  {
    title: 'LegalLegit',
    description:
      'Created an AI-powered legal education website using HTML, CSS, and JavaScript, integrated with the OpenAI API to help users understand legal terminology and their basic rights. The platform featured an interactive chatbot capable of answering user-specific questions such as “I got into a hit-and-run, what should I do?”, providing clear, conversational guidance. Designed a responsive and user-friendly interface to promote public awareness of legal concepts and improve access to reliable information through real-time AI interactions. ',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/karu-007/LegalLegit.git',
    image: "/project2.png"
  },
  {
    title: 'AutoHub',
    description:
      'Built the front-end application for a car-selling platform, focusing on delivering a seamless and engaging user experience. Leveraged TypeScript and JavaScript to develop responsive, dynamic, and maintainable user interfaces. Prioritized performance optimization and intuitive design to ensure users had a smooth and positive interaction with the platform. Additionally, implemented a secure authentication system with two-factor authentication (2FA), integrating Firefox-based verification to enhance account security and protect user data.',
    tech: ['JavaScript', 'TypeScript'],
    link: 'https://github.com/karu-007/AutoHub.git',
    image: "/project3.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>

              <img
                src={p.image}
                alt={p.title}
                className="project-image"
              />

              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <div className="tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <a href={p.link} className="project-btn">
                View Project
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}