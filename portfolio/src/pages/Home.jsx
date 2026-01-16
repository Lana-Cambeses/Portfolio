import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Interactive 3D Renderer",
    desc: "Real-time rendering engine with custom camera systems, lighting pipeline, and model loading.",
    tech: "C++ · OpenGL · SDL2",
    snapshot: "SNAPSHOT_01.png"
  },
  {
    id: 2,
    title: "Dramatic – Chrome Extension",
    desc: "Instant explanations for cultural and anime references using Wikipedia API.",
    tech: "React · Node · Wikipedia API",
    snapshot: "SNAPSHOT_02.png"
  },
  {
    id: 3,
    title: "Cyberpunk Portfolio",
    desc: "Personal portfolio built with a cyberpunk-inspired UI and system-driven layout.",
    tech: "React · CSS · Vite",
    snapshot: "SNAPSHOT_03.png"
  }
];

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const activeProject = projects[activeIndex];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  return (
    <main className="home">
        <section className="hero" id="home">
            <div className="hero-inner">
                <h1 className="hero-title glitch">
                    <span aria-hidden="true">Hi, I’m Lana.</span>
                    Hi, I’m Lana.
                    <span aria-hidden="true">Hi, I’m Lana.</span>
                </h1>

                <p className="hero-subtitle"> Computer Science | Programming Craftsman | Digital Creator </p>

                <br></br>
                <p className="hero-tagline"> Graphics · Interface · Creative Coding </p>

                <div className="hero-actions">
                    <button type="button" onClick={() => scrollToSection("projects")}>
                        View Projects
                    </button>

                    <button type="button" onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>
                </div>
            </div>
              <div className="hero-visual glitch-frame">
                <img src="/hero-system.png" alt="System scan visualization" />
            </div>
        </section>


      <section className="projects" id="projects">
        <div className="projects-header">
          <span className="projects-label">SYSTEM / PROJECTS</span>
          <h2>Selected Work</h2>
        </div>

        <div className="projects-grid">
           <div className="module-wrapper">
                <button
                    className="module-nav left"
                    onClick={() =>
                    setActiveIndex((prev) =>
                        prev === 0 ? projects.length - 1 : prev - 1
                    )
                    }
                >
                    &lt;
                </button>

                <div className="project-card active-module">
                    <span className="project-label">MODULE / ACTIVE</span>

                    <h3>{activeProject.title}</h3>

                    <p>{activeProject.desc}</p>

                    <span className="project-tech">{activeProject.tech}</span>

                    <div className="project-snapshot">
                    <span>{activeProject.snapshot}</span>
                    </div>
                </div>

                <button
                    className="module-nav right"
                    onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % projects.length)
                    }
                >
                    &gt;
                </button>
            </div>

        </div>
      </section>

      <section className="about" id="about">
        <div className="about-header">
            <span className="about-label">SYSTEM / ABOUT</span>
            <h2>Operator Profile</h2>
        </div>

        <div className="about-grid">
            <div className="about-block">
                <h3>Identity</h3>
                <p>
                    Software developer invested in graphics
                    programming, system tooling, and creative development
                </p>
                </div>

                <div className="about-block">
                <h3>Focus</h3>
                <p>
                    Low-level programming with emphasis on C++, 
                    object-oriented design, and program logic
                </p>
                </div>

                <div className="about-block">
                <h3>Status</h3>
                    <p>
                        Exploring rendering pipelines in C++
                    </p>
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <div className="contact-header">
                <span className="contact-label">SYSTEM / CONTACT</span>
                <h2>Open Channel</h2>
            </div>

            <div className="contact-console">
                <div className="console-line">
                <span className="console-prompt">&gt;</span>
                <span className="console-key">EMAIL</span>
                <span className="console-value">lanacambeses@gmail.com</span>
                </div>

                <div className="console-line">
                <span className="console-prompt">&gt;</span>
                <span className="console-key">GITHUB</span>
                <span className="console-value">github.com/Lana-Cambeses</span>
                </div>

                <div className="console-line">
                <span className="console-prompt">&gt;</span>
                <span className="console-key">LINKEDIN</span>
                <span className="console-value">linkedin.com/in/lanacambeses</span>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="footer-bar">
                <div className="footer-inner">
                <span className="footer-status">
                    SYSTEM STATUS: <span className="footer-online">ONLINE</span>
                </span>
                <span className="footer-meta">
                    © {new Date().getFullYear()} Lana Cambeses · All systems operational
                </span>
                </div>
            </div>
        </footer>


    </main>

    
  )
}

export default Home

