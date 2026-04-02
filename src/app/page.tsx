import React from "react";

export default function Home() {
  return (
    <div className="font-chivo text-root-text selection:bg-brand selection:text-root-bg">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full border-b-4 border-brand bg-root-bg z-50 flex justify-between items-stretch">
        <div className="px-8 py-6 text-2xl font-bold border-r-4 border-brand font-archivo leading-none tracking-tight">
          JUDE<br />AKINWALE
        </div>
        <div className="hidden md:flex">
          {['About', 'Skills', 'Experience', 'Work', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-8 py-6 border-l border-brand/40 font-bold uppercase transition-colors duration-150 ease-out hover:bg-brand hover:text-root-bg"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="pt-32">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex items-end pb-16 pt-32">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="animate-fade-up">
              <span className="inline-block bg-brand text-root-bg px-4 py-2 font-bold mb-8 uppercase text-sm tracking-wider shadow-[4px_4px_0_theme(colors.brand)] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none duration-150">
                System Status: Online
              </span>
              <h1 className="font-archivo text-[clamp(4rem,10vw,8rem)] leading-[0.85] mb-4 tracking-tighter uppercase">
                AKINWALE<br />
                <span className="text-brand">JUDE O.</span>
              </h1>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] text-brand mb-8 uppercase font-bold tracking-tight">
                SENIOR SOFTWARE ENGINEER / TECH LEAD
              </h2>
              <p className="text-lg max-w-2xl border-l-4 border-brand pl-6 mb-12 text-root-text/90">
                High-performance real-time systems. Crypto trading platforms. Enterprise applications. I build robust backends and dynamic frontends that don't compromise on speed or bold aesthetics.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#work" className="inline-block px-8 py-4 border-4 border-brand bg-root-bg text-root-text font-archivo text-xl uppercase transition-all duration-150 ease-out shadow-[6px_6px_0_theme(colors.brand)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none hover:bg-brand hover:text-root-bg">
                  View Projects
                </a>
                <a href="#contact" className="inline-block px-8 py-4 border-4 border-brand bg-root-bg text-root-text font-archivo text-xl uppercase transition-all duration-150 ease-out hover:bg-root-text hover:text-root-bg hover:border-root-text">
                  Initialize Contact
                </a>
              </div>
            </div>
            <div className="flex items-end justify-center lg:justify-end lg:border-l-4 border-brand lg:pl-8 animate-fade-up delay-200">
              <div className="border-4 border-brand bg-root-bg p-8 text-center transition-transform hover:scale-105 duration-200 ease-out">
                <h3 className="text-6xl lg:text-7xl xl:text-8xl font-archivo text-brand mb-4 leading-none">05+</h3>
                <p className="uppercase font-bold tracking-widest text-sm text-root-text/80">Years of Production<br />Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="animate-fade-up delay-300">
          {/* MARQUEE */}
          <div className="overflow-hidden border-y-4 border-brand bg-brand text-root-bg py-4 flex flex-nowrap">
            <div className="marquee-content font-archivo text-4xl lg:text-5xl tracking-tight">
              {/* Repeated for seamless scroll effect */}
              {['TYPESCRIPT', 'NODE.JS', 'REACT', 'NEXT.JS', 'PYTHON', 'FASTAPI', 'POSTGRESQL', 'WEBSOCKETS', 'SOLANA', 'TURNKEY SDK', 'DOCKER', 'REDIS', 'AWS'].map((skill, i) => (
                <span key={`1-${i}`} className="mr-12">{skill}</span>
              ))}
              {['TYPESCRIPT', 'NODE.JS', 'REACT', 'NEXT.JS', 'PYTHON', 'FASTAPI', 'POSTGRESQL', 'WEBSOCKETS', 'SOLANA', 'TURNKEY SDK', 'DOCKER', 'REDIS', 'AWS'].map((skill, i) => (
                <span key={`2-${i}`} className="mr-12">{skill}</span>
              ))}
            </div>
          </div>

          {/* STATIC REFERENCE GRID */}
          <div className="max-w-7xl mx-auto px-8 py-16">
            <h3 className="font-archivo text-2xl md:text-3xl uppercase mb-8 text-stroke-white text-root-bg leading-none">CORE ARCHITECTURE / SKILLS LOG</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { cat: 'Languages', items: 'TypeScript, JavaScript, Python, SQL' },
                { cat: 'Frontend', items: 'React, Next.js, Tailwind, HTML/CSS' },
                { cat: 'Backend', items: 'Node.js, Express.js, FastAPI, Django' },
                { cat: 'Databases', items: 'PostgreSQL, MongoDB, MySQL, Redis' },
                { cat: 'Infrastructure', items: 'Docker, AWS, Azure, CI/CD' },
                { cat: 'Web3 & Real-time', items: 'WebSockets, Solana, CLOB API' },
                { cat: 'Enterprise', items: 'SharePoint, React SPFx, OpenCV' },
                { cat: 'Tools', items: 'Git, GitHub Actions, Vercel' }
              ].map((group, idx) => (
                <div key={idx} className="border-4 border-brand p-4 bg-root-bg group transition-all duration-200 hover:bg-brand hover:text-root-bg hover:-translate-y-1 hover:shadow-[4px_4px_0_theme(colors.root.text)]">
                  <div className="font-archivo text-lg mb-2 uppercase border-b-2 border-brand/50 group-hover:border-root-bg/50 pb-2">{group.cat}</div>
                  <div className="text-sm font-medium opacity-90">{group.items}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 border-b-4 border-brand">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="relative group">
              <div className="inline-block p-4 border-4 border-brand font-archivo text-3xl md:text-4xl -rotate-3 bg-brand text-root-bg shadow-[8px_8px_0_rgba(250,250,250,0.1)] transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105">
                SYS.ADM // ALGORITHM<br />
                CORE // MODULE_01
              </div>
            </div>
            <div className="border-4 border-brand bg-root-bg p-8 md:p-12 hover:shadow-[12px_12px_0_theme(colors.brand)] transition-shadow duration-300">
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-12 text-stroke-white leading-[0.9] uppercase inline-block">
                ABOUT
              </h2>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-root-text/90">
                <p>
                  I am a <strong className="text-brand font-bold">Senior Software Engineer and Technical Lead</strong> with 5 years of professional experience building production-grade full-stack web applications. My passion lies in developing data-heavy real-time platforms, including systems for crypto trading, prediction markets, and auction bidding.
                </p>
                <p>
                  Beyond writing high-performance WebSockets and robust APIs, I excel at technical leadership, mentoring teams, and applying critical thinking to architecture design. My goal is to always deliver scalable and secure applications using Agile methodology, with an undeniable aesthetic edge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-b-4 border-brand">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-16 text-stroke-white leading-[0.9] uppercase">
              EXPERIENCE
            </h2>
            <div className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-4 border-brand bg-root-bg group transition-all duration-300 hover:shadow-[8px_8px_0_rgba(251,146,60,0.8)]">
                <div className="bg-root-text text-root-bg p-8 flex items-center justify-center text-center font-archivo text-xl border-b-4 md:border-b-0 md:border-r-4 border-brand transition-colors duration-300 group-hover:bg-brand">
                  SEP 2025 // <br /> PRESENT
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-3xl font-bold font-archivo text-brand mb-2 uppercase">Senior Software Engineer</div>
                  <div className="text-xl font-bold mb-6 uppercase tracking-wide">Homepage // Dublin (Remote)</div>
                  <ul className="list-square pl-6 space-y-3 text-lg text-root-text/80">
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Develop and maintain crypto trading and prediction market platforms ensuring high availability and low latency.</li>
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Architect secure backends using Next.js, Express.js, TypeScript, PostgreSQL and MongoDB.</li>
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Integrate complex Web3 SDKs including Turnkey and Polymarket CLOB APIs.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-4 border-brand bg-root-bg group transition-all duration-300 hover:shadow-[8px_8px_0_rgba(251,146,60,0.8)]">
                <div className="bg-root-text text-root-bg p-8 flex items-center justify-center text-center font-archivo text-xl border-b-4 md:border-b-0 md:border-r-4 border-brand transition-colors duration-300 group-hover:bg-brand">
                  MAY 2021 // <br /> SEP 2025
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-3xl font-bold font-archivo text-brand mb-2 uppercase">Full-Stack Dev / Tech Lead</div>
                  <div className="text-xl font-bold mb-6 uppercase tracking-wide">Lotus Beta Analytics // Lagos (Hybrid)</div>
                  <ul className="list-square pl-6 space-y-3 text-lg text-root-text/80">
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Spearheaded the development of robust full-stack enterprise applications and automated workflows using React, Node, and Python.</li>
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Mentored junior developers, introduced Agile practices, and significantly improved code quality across the team.</li>
                    <li className="transition-transform duration-150 hover:-translate-y-0.5">Implemented tailored enterprise solutions utilizing SharePoint and React SPFx.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 border-b-4 border-brand">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-16 text-stroke-white leading-[0.9] uppercase">
              WORK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
                <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">01</div>
                <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">PRYSM.TRADE</h3>
                <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                  A high-performance trading platform providing real-time technical analysis and seamless transaction capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['NEXT.JS', 'TYPESCRIPT', 'WEBSOCKETS'].map(skill => (
                    <span key={skill} className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
                <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">02</div>
                <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">ELECTRONIC TESTING</h3>
                <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                  Scalable, secure examination platform capable of handling thousands of concurrent users with real-time grading and reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['REACT', 'DJANGO', 'POSTGRESQL'].map(skill => (
                    <span key={skill} className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
                <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">03</div>
                <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">ATTENDANCE MGT</h3>
                <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                  Enterprise solution leveraging Facial Recognition (OpenCV) to digitally track and record daily attendance efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PYTHON (FASTAPI)', 'OPENCV', 'REACT SPFX'].map(skill => (
                    <span key={skill} className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-16 text-center text-stroke-white leading-[0.9] uppercase xl:mb-24">
              TRANSMIT SIGNAL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-brand bg-root-bg">
              <div className="p-8 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-brand">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-archivo uppercase mb-8 leading-tight">OPEN FOR DEPLOYMENT.</h3>
                <p className="text-xl mb-12 text-root-text/80">
                  Whether you’re dealing with high-frequency trades or complex enterprise architecture, I can help build systems that scale indefinitely.
                </p>
                <a href="mailto:judeakinwale@gmail.com" className="block w-full text-center border-4 border-brand bg-root-bg text-root-text font-archivo text-2xl py-6 tracking-widest uppercase transition-all duration-150 ease-out shadow-[8px_8px_0_theme(colors.brand)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none hover:bg-brand hover:text-root-bg">
                  Initialize Email
                </a>
              </div>
              <div className="flex flex-col">
                <div className="p-8 pb-4">
                  <h4 className="text-brand font-archivo text-2xl uppercase">CONNECT</h4>
                </div>
                <div className="flex-grow flex flex-col font-archivo text-3xl md:text-4xl lg:text-5xl">
                  <a href="https://github.com/judeakinwale" target="_blank" rel="noreferrer" className="flex-1 flex items-center px-8 border-b border-brand/40 transition-all duration-200 hover:text-brand hover:bg-brand/10 hover:pl-12">
                    GITHUB ↗
                  </a>
                  <a href="#" className="flex-1 flex items-center px-8 border-b border-brand/40 opacity-50 cursor-not-allowed">
                    LINKEDIN ↗
                  </a>
                  <a href="tel:+2349064430102" className="flex-1 flex items-center px-8 transition-all duration-200 hover:text-brand hover:bg-brand/10 hover:pl-12">
                    CALL ME ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
