import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
     
      <Footer />
      
    </BrowserRouter>
  );
}
export default App;
