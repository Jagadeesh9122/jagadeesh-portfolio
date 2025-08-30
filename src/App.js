import Navigation from './components/Navigation/navigation'
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Services from './components/Services/services';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css'

function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
