import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Footer from './components/Footer'


function App() {
  library.add(fab);
  return (
    <div className='app bottom-layer'>
      <header className='bg-scroll'>
        <Navbar />
        <HeroSection heading='Hi! My name is Ren Demeis-Ortiz.' buttonText='Contact'/>
      </header>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <div className='bg-scroll'></div>
    </div>
  );
}

export default App;


