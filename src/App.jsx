import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Comozemy from "./components/Comozemy";
import DlaKogo from "./components/DlaKogo";
import Header from "./components/common/Header";
import Hero from "./components/Hero";
import Odkryj from "./components/Odkryj";
import Footer from "./components/common/Footer";
import Najczesciej from "./components/Najczesciej";
import JakZaczac from "./components/JakZaczac";
import Dlaczego from "./components/Dlaczego";
import Moduly from "./components/Moduly";
import BackToTop from "./components/BackToTop";

import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.scrollTo(0, {
      offset: 0,
      immediate: true,
    });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Odkryj />
              <DlaKogo />
              <Comozemy />
              <Dlaczego />
              <JakZaczac />
              <Najczesciej />
            </>
          }
        />
        <Route path="/strona" element={<Moduly />} />
        <Route path="/dlakogo" element={<DlaKogo />} />
        <Route path="/działa" element={<JakZaczac />} />
        <Route path="/dlaczego" element={<Dlaczego />} />
        <Route path="/moduly" element={<Moduly />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
