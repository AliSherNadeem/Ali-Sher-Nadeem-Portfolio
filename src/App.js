import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-[#050510] overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
