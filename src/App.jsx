import '@fontsource/poppins';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import About from './Components/About/About';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Footer/>
    </>
  )
}

export default App
