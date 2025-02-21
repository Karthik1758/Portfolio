import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar className="hidden sm:flex"/>
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
