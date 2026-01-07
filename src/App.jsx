import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0b1220] text-gray-200 min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        {/* pt-20 offsets fixed navbar height */}

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Certifications />

        <Contact />
      </main>
    </div>
  );
}
