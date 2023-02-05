import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css'


import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";



function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


