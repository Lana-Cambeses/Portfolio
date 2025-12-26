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

  return (
    <main className="home">
        <section className="hero">
            <div className="hero-inner">
                <h1 className="hero-title glitch">
                    <span aria-hidden="true">Hi, I’m Lana.</span>
                    Hi, I’m Lana.
                    <span aria-hidden="true">Hi, I’m Lana.</span>
                </h1>

                <p className="hero-subtitle">
                Computer Science student. Creative developer.
                </p>

                <div className="hero-actions">
                    <button>View Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </section>


      <section className="projects">
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
                    Computer Science student with a strong interest in graphics
                    programming, UI systems, and creative development.
                </p>
                </div>

                <div className="about-block">
                <h3>Focus</h3>
                <p>
                    Building interactive systems that combine low-level programming
                    with thoughtful user experiences.
                </p>
                </div>

                <div className="about-block">
                <h3>Status</h3>
                    <p>
                        Actively developing personal tools and exploring real-time
                        rendering pipelines.
                    </p>
                </div>
            </div>
        </section>

    </main>

    
  )
}

export default Home

