import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Intropage from "./components/Intropage";
import AboutPage from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Navbar />
        <main className="space-y-8 py-4">
          <section id="home" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <Intropage />
          </section>
          <section id="about" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <AboutPage />
          </section>
          <section id="technologies" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <Technologies />
          </section>
          <section id="experience" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <Experience />
          </section>
          <section id="projects" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <Projects />
          </section>
          <section id="contact" className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

