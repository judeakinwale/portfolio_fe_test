import React from "react";

export default function Home() {
  return (
    <>
      <nav className="nav-brutal">
        <div className="nav-logo">
          JUDE<br/>AKINWALE
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div>
              <span className="hero-greeting">System Status: Online</span>
              <h1 className="hero-title">AKINWALE<br/><span className="text-accent">JUDE O.</span></h1>
              <h2 className="hero-subtitle">SENIOR SOFTWARE ENGINEER / TECH LEAD</h2>
              <p className="hero-desc">
                High-performance real-time systems. Crypto trading platforms. Enterprise applications. I build robust backends and dynamic frontends that don't compromise on speed or bold aesthetics.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#projects" className="btn-brutal">View Projects</a>
                <a href="#contact" className="btn-brutal btn-brutal-secondary">Initialize Contact</a>
              </div>
            </div>
            <div style={{ alignSelf: 'flex-end', borderLeft: 'var(--border-thick)', paddingLeft: '2rem' }}>
              <div className="brutal-box" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '1rem', lineHeight: 1 }}>05+</h3>
                <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Years of Production<br/>Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE SKILLS SECTION */}
        <div className="marquee-container" id="skills">
          <div className="marquee-content">
            {/* Repeated twice for seamless scroll effect */}
            <span className="marquee-item">TYPESCRIPT</span>
            <span className="marquee-item">REACT</span>
            <span className="marquee-item">NEXT.JS</span>
            <span className="marquee-item">PYTHON</span>
            <span className="marquee-item">FASTAPI</span>
            <span className="marquee-item">POSTGRESQL</span>
            <span className="marquee-item">WEBSOCKETS</span>
            <span className="marquee-item">SOLANA</span>
            <span className="marquee-item">TURNKEY SDK</span>
            <span className="marquee-item">DOCKER</span>
            
            <span className="marquee-item">TYPESCRIPT</span>
            <span className="marquee-item">REACT</span>
            <span className="marquee-item">NEXT.JS</span>
            <span className="marquee-item">PYTHON</span>
            <span className="marquee-item">FASTAPI</span>
            <span className="marquee-item">POSTGRESQL</span>
            <span className="marquee-item">WEBSOCKETS</span>
            <span className="marquee-item">SOLANA</span>
            <span className="marquee-item">TURNKEY SDK</span>
            <span className="marquee-item">DOCKER</span>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="container about-block">
            <div>
              <div className="about-badge">
                SYS.ADM // ALGORITHM
                <br/>
                CORE // MODULE_01
              </div>
            </div>
            <div className="about-text brutal-border" style={{ padding: '3rem', background: 'var(--bg-color)' }}>
              <h2 className="section-title">ABOUT</h2>
              <p>
                I am a <strong>Senior Software Engineer and Technical Lead</strong> with 5 years of professional experience building production-grade full-stack web applications. My passion lies in developing data-heavy real-time platforms, including systems for crypto trading, prediction markets, and auction bidding.
              </p>
              <p>
                Beyond writing high-performance WebSockets and robust APIs, I excel at technical leadership, mentoring teams, and applying critical thinking to architecture design. My goal is to always deliver scalable and secure applications using Agile methodology, with an undeniable aesthetic edge.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="container">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="timeline-container">
              
              <div className="timeline-row">
                <div className="timeline-date-block">
                  SEP 2025 // <br/> PRESENT
                </div>
                <div className="timeline-details">
                  <div className="timeline-role">Senior Software Engineer</div>
                  <div className="timeline-company">Homepage // Dublin (Remote)</div>
                  <ul>
                    <li>Develop and maintain crypto trading and prediction market platforms ensuring high availability and low latency.</li>
                    <li>Architect secure backends using Next.js, Express.js, TypeScript, PostgreSQL and MongoDB.</li>
                    <li>Integrate complex Web3 SDKs including Turnkey and Polymarket CLOB APIs.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-row">
                <div className="timeline-date-block">
                  MAY 2021 // <br/> SEP 2025
                </div>
                <div className="timeline-details">
                  <div className="timeline-role">Full-Stack Developer / Tech Lead</div>
                  <div className="timeline-company">Lotus Beta Analytics // Lagos (Hybrid)</div>
                  <ul>
                    <li>Spearheaded the development of robust full-stack enterprise applications and automated workflows using React, Node, and Python frameworks.</li>
                    <li>Mentored junior developers, introduced Agile practices, and significantly improved code quality across the team.</li>
                    <li>Implemented tailored enterprise solutions utilizing SharePoint and React SPFx.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="container">
            <h2 className="section-title">PROJECTS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              <div className="project-card">
                <div className="project-num">01</div>
                <h3 className="project-title">PRYSM.TRADE</h3>
                <p className="project-desc">
                  A high-performance trading platform providing real-time technical analysis and seamless transaction capabilities.
                </p>
                <div>
                  <span className="skill-pill">NEXT.JS</span>
                  <span className="skill-pill">TYPESCRIPT</span>
                  <span className="skill-pill">WEBSOCKETS</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-num">02</div>
                <h3 className="project-title">ELECTRONIC TESTING</h3>
                <p className="project-desc">
                  Scalable, secure examination platform capable of handling thousands of concurrent users with real-time grading and reporting.
                </p>
                <div>
                  <span className="skill-pill">REACT</span>
                  <span className="skill-pill">DJANGO</span>
                  <span className="skill-pill">POSTGRESQL</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-num">03</div>
                <h3 className="project-title">ATTENDANCE MGT</h3>
                <p className="project-desc">
                  Enterprise solution leveraging Facial Recognition (OpenCV) to digitally track and record daily attendance efficiently.
                </p>
                <div>
                  <span className="skill-pill">PYTHON (FASTAPI)</span>
                  <span className="skill-pill">OPENCV</span>
                  <span className="skill-pill">REACT SPFX</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{ borderBottom: 'none' }}>
          <div className="container">
            <h2 className="section-title" style={{ width: '100%', textAlign: 'center', marginBottom: '4rem' }}>TRANSMIT SIGNAL</h2>
            <div className="contact-grid">
              <div className="contact-block">
                <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>OPEN FOR DEPLOYMENT.</h3>
                <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
                  Whether you’re dealing with high-frequency trades or complex enterprise architecture, I can help build systems that scale indefinitely.
                </p>
                <a href="mailto:judeakinwale@gmail.com" className="btn-brutal" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  JUDEAKINWALE@GMAIL.COM
                </a>
              </div>
              <div className="contact-block contact-social text-accent">
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>CONNECT</h4>
                <a href="https://github.com/judeakinwale" target="_blank" rel="noreferrer">GITHUB ↗</a>
                <a href="#linked" style={{ cursor: 'not-allowed' }}>LINKEDIN ↗</a>
                <a href="tel:+2349064430102">CALL (+234) 906 443 0102 ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
