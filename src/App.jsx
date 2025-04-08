import '@fontsource/poppins';
import NavBar from './Components/Nav/NavBar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import About from './Components/About/About';
import Footer from './Components/Footer';
import SEO from './Components/SEO/SEO';

function App() {
  return (
    <>
      <SEO 
        title="Mohd Faziel - Portfolio"
        description="Professional portfolio showcasing web development projects, skills, and experience in React, JavaScript, and modern web technologies."
      />
      <div className="overflow-x-hidden">
        <header>
          <NavBar />
        </header>
        <main>
          <section id="home" aria-label="Home section">
            <Home />
          </section>
          <section id="about" aria-label="About section">
            <About />
          </section>
          <section id="projects" aria-label="Projects section">
            <Projects />
          </section>
          <section id="skills" aria-label="Skills section">
            <Skills />
          </section>
          <section id="certifications" aria-label="Certifications section">
            <Certifications />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
