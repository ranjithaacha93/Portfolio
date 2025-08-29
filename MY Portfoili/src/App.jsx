//   import { useState } from 'react'
// import './App.css'

// import Nav from './Navbar/Nav'
// import Home from './page/Home/Home'
// import About from './page/About/About'
// import Skill from './page/Skill/skill'
// import Project from './page/project/project'
// import Contact from './page/contact/contact'

// function App() {

//   const [Show,setShow] = useState(false)

//   return (
//     <>
//       <Nav show={Show} setshow={setShow}/>
//       <Home/>
//       <About/>
//       <Skill/>
//       <Project/>
//       <Contact/>
//     </>
//   )
// }

// export default App

// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Nav from './Navbar/Nav'
import Home from './page/Home/Home'
import About from './page/About/About'
import Skill from './page/Skill/skill'
import Project from './page/project/project'
import Contact from './page/contact/contact'

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { x: "100%", opacity: 0 },   // Enter from Right
    in: { x: 0, opacity: 1 },             // Middle
    out: { x: "-100%", opacity: 0 }       // Exit Left
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.6
  };

  const PageWrapper = ({ children }) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skill" element={<PageWrapper><Skill /></PageWrapper>} />
        <Route path="/project" element={<PageWrapper><Project /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <AnimatedRoutes />
    </Router>
  );
}
