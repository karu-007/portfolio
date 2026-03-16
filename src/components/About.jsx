export default function About() {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <h1>
          Hi, I'm <span className="accent">Karunya Jaghni</span>
        </h1>

        <h2>
            Aspiring Growth Focused MLOps Engineer
        </h2>

        <p className="hero-sub">
          I'm a computer science student with a passion for machine learning systems and MLOps. I have strong foundation skills and experience 
          in Python, Java, C++, HTML, CSS, and React. My focus is to build projects that combine software engineering with data-driven solutions.
          My motivation is curiosity, I may not always no the asnwer, but I'm driven to understand why things work the way they do, and I'm constantly
          willing to put the work to figure it out. I am currently focusing on improving my technical foundation and gain experience through internships
          in AI, Data Science, and Machine Learning, with a long-term goal to buid and manage machine learning systems in production.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
        </div>

        <div className="stats">
          <div className="stat">
            <h3>3+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>CS</h3>
            <p>Student</p>
          </div>

          <div className="stat">
            <h3>∞</h3>
            <p>Learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}