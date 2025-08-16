import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import Nav from './Navbar/Nav';
import Home from './page/Home/Home';
import About from './page/About/About';
import Skill from './page/Skill/Skill';
import Project from './page/project/Project';
import Contact from './page/contact/Contact';
import Particles from './animactions/Particles';
import TrueFocus from './components/TrueFocus';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const location = useLocation();

  const totalCycles = 4;
  const sentence = "My Portfolio";

  const handleWordChange = (index) => {
    const words = sentence.split(" ");
    if (index === words.length - 1) {
      setCycleCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= totalCycles) {
          setFadeOut(true);
          setTimeout(() => setShowLoader(false), 500);
        }
        return newCount;
      });
    }
  };

  if (showLoader) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "#fff",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <TrueFocus
          sentence={sentence}
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={0.5}
          pauseBetweenAnimations={0.5}
          onWordChange={handleWordChange}
        />
      </div>
    );
  }

  return (
    <>
      <Particles
        particleColors={["#000", "#00ffcc", "#ff0055"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="fullscreen-particles"
      />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skill /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Project /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        zIndex: 1
      }}
    >
      {children}
    </motion.div>
  );
}
