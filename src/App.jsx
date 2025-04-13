import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Components/Index";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Shop from "./Components/Shop/Shop";
import Gallery from "./Components/Gallery/Gallery";
import Main from "./Components/Contact/Main";
import TopofPage from "./Components/TopofPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
    });
  }, []);

  return (
    <Router>
      <TopofPage />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
