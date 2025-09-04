import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full relative bg-white">
          {/* Apple-Inspired Subtle Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "transparent",
              backgroundImage: `
                radial-gradient(
                  circle at 50% 0%,
                  rgba(0, 113, 227, 0.08),
                  transparent 70%
                ),
                radial-gradient(
                  circle at 30% 100%,
                  rgba(0, 113, 227, 0.05),
                  transparent 70%
                )
              `,
              filter: "blur(60px)",
              backgroundRepeat: "no-repeat",
              opacity: 0.8
            }}
          />
          
          {/* Main Content */}
          <div className="relative z-10">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
