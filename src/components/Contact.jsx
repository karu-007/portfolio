export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-photo-card">
          <img
            src="/unnamed.jpg"
            alt="Portrait"
            className="contact-photo"
          />
        </div>

        <div className="contact-info-card">
          <h2>How To Contact Me</h2>

          <div className="contact-block">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">karunyajaghni007@gmail.com</span>
            </div>

            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <span className="contact-value">(412) 499-1373</span>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/karunya-jaghni/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn contact-btn"
          >
            Visit My LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}