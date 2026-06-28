import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Workflow from "./components/Workflow";
import Certificates from "./components/Certificates";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Immersive Background Canvas, Cursor, and Panel tools */}
      <CustomCursor />
      <ParticleBackground />
      <ThemeCustomizer />

      {/* Main navigation controls */}
      <Navbar />

      {/* Content wrapper */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Workflow />
        <Certificates />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
