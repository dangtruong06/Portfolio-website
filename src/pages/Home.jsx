import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import TechStack from '../components/Tech'

function Home(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Experience/>
      <Contact />

    </div>
  )
}

export default Home