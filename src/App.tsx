import React from 'react';
import Header from './components/Header';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from './components/AnimatePresence';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        <AnimatePresence>
          <About />
          <Resume />
          <Projects />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;