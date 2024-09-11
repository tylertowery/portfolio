import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
