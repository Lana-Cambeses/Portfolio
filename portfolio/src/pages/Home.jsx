function Home() {
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
          <div className="project-card">
            <h3>Interactive 3D Renderer</h3>
            <p>
              A C++ OpenGL project focused on real-time rendering,
              camera systems, and lighting.
            </p>
            <span className="project-tech">C++ · OpenGL · SDL</span>
          </div>

          <div className="project-card">
            <h3>Cyberpunk Portfolio</h3>
            <p>
              A React-based personal portfolio with a cyberpunk-inspired UI.
            </p>
            <span className="project-tech">React · CSS · Vite</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

