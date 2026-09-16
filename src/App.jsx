import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections matching Navigation */}
      <main>
        <About />
        <Projects />
        <Skills />
      </main>

      {/* Footer & Contact */}
      <Contact />
    </div>
  );
}

export default App;