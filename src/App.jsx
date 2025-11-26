import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Statistics from './components/Statistics'
import Solutions from './components/Solutions'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Statistics />
              <Services />
              <Solutions />
              <About />
              <Testimonials />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
