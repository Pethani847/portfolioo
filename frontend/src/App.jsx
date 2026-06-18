import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Project from "./Project"
import Skills from "./Skills"
import Undefined from "./Undefined"

function App() {
  return (
    <div >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Undefined />
        <Education />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
