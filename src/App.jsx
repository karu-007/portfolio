import './styles.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}