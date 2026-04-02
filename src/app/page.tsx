import React from "react";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">
            Jude<span className="text-accent">.dev</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="hero-bg-glow"></div>
          <div className="container hero-content animate-fade-in">
            <span className="hero-greeting">Hi, my name is</span>
            <h1 className="hero-title">Akinwale Jude O.</h1>
            <h2 className="hero-subtitle">Senior Software Engineer.</h2>
            <p className="hero-desc">
              I'm a full-stack developer and technical lead specializing in high-performance real-time systems, crypto trading platforms, and enterprise applications.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">Check out my work!</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="container animate-fade-in delay-100">
          <h2 className="section-heading">About Me</h2>
          <div className="glass p-8" style={{ padding: '2rem' }}>
            <p>
              I am a <strong>Senior Software Engineer and Technical Lead</strong> with 5 years of professional experience building production-grade full-stack web applications. My passion lies in developing data-heavy real-time platforms, including systems for crypto trading, prediction markets, and auction bidding.
            </p>
            <br />
            <p>
              Beyond coding, I excel at technical leadership, mentoring teams, and applying critical thinking to architecture design. My goal is to always deliver robust, scalable, and secure applications using the Agile methodology.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="container animate-fade-in delay-200">
          <h2 className="section-heading">Core Skills</h2>
          <div className="skills-grid">
            <div className="glass skill-card">
              <h3 className="skill-category">Languages & Frameworks</h3>
              <div className="skill-items">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">FastAPI</span>
              </div>
            </div>
            
            <div className="glass skill-card">
              <h3 className="skill-category">Real-time & Web3</h3>
              <div className="skill-items">
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">Turnkey SDK</span>
                <span className="skill-tag">Polymarket SDKs</span>
                <span className="skill-tag">CLOB API</span>
                <span className="skill-tag">Solana</span>
              </div>
            </div>

            <div className="glass skill-card">
              <h3 className="skill-category">DevOps & Cloud</h3>
              <div className="skill-items">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>

            <div className="glass skill-card">
              <h3 className="skill-category">Databases</h3>
              <div className="skill-items">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">SQLite</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="container animate-fade-in delay-300">
          <h2 className="section-heading">Where I've Worked</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass timeline-content">
                <span className="timeline-date">Sep 2025 – Present</span>
                <h3 className="timeline-title">Senior Software Engineer</h3>
                <h4 className="timeline-company">Homepage, Dublin (Remote)</h4>
                <ul>
                  <li style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>Develop and maintain crypto trading and prediction market platforms ensuring high availability and low latency.</li>
                  <li style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>Architect secure backends using Next.js, Express.js, TypeScript, PostgreSQL and MongoDB.</li>
                  <li style={{ marginLeft: '1rem' }}>Integrate complex Web3 SDKs including Turnkey and Polymarket CLOB APIs.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass timeline-content">
                <span className="timeline-date">May 2021 – Sep 2025</span>
                <h3 className="timeline-title">Full-Stack Developer → Tech Lead</h3>
                <h4 className="timeline-company">Lotus Beta Analytics, Lagos (Hybrid)</h4>
                <ul>
                  <li style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>Spearheaded the development of robust full-stack enterprise applications and automated workflows using React, Node, and Python frameworks.</li>
                  <li style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>Mentored junior developers, introduced Agile practices, and significantly improved code quality across the team.</li>
                  <li style={{ marginLeft: '1rem' }}>Implemented tailored enterprise solutions utilizing SharePoint and React SPFx.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="container animate-fade-in delay-300">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="projects-grid">
            <div className="glass project-card">
              <div className="project-icon">📈</div>
              <h3 className="project-title">Prysm.trade</h3>
              <p className="project-desc">
                A high-performance trading platform providing real-time technical analysis and seamless transaction capabilities.
              </p>
              <div className="skill-items">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">WebSockets</span>
              </div>
            </div>

            <div className="glass project-card">
              <div className="project-icon">📝</div>
              <h3 className="project-title">Electronic Testing System</h3>
              <p className="project-desc">
                Scalable, secure examination platform capable of handling thousands of concurrent users with real-time grading and reporting.
              </p>
              <div className="skill-items">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>

            <div className="glass project-card">
              <div className="project-icon">🏛️</div>
              <h3 className="project-title">Attendance Management System</h3>
              <p className="project-desc">
                Enterprise solution leveraging Facial Recognition (OpenCV) to digitally track and record daily attendance efficiently.
              </p>
              <div className="skill-items">
                <span className="skill-tag">Python (FastAPI)</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">React SPFx</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container animate-fade-in delay-300" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 className="section-heading" style={{ margin: '0 auto 2rem' }}>Get In Touch</h2>
          <p style={{ marginBottom: '2rem', color: '#a1a1aa' }}>
            I’m always open to discussing new opportunities, crypto architectures, or any other web development work. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:judeakinwale@gmail.com" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
            Say Hello
          </a>
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="https://github.com/judeakinwale" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>GitHub</a>
            <a href="mailto:judeakinwale@gmail.com" style={{ textDecoration: 'underline' }}>Email</a>
            <span style={{ color: '#a1a1aa' }}>+234 906 443 0102</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Designed & Built manually based on Akinwale Jude O.'s Resume</p>
        </div>
      </footer>
    </>
  );
}
