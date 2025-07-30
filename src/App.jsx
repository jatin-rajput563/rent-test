import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comozemy from "./components/Comozemy";
import DlaKogo from "./components/DlaKogo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Odkryj from "./components/Odkryj";
import Footer from "./components/Footer";
import Najczesciej from "./components/Najczesciej";
import JakZaczac from "./components/JakZaczac";
import Dlaczego from "./components/Dlaczego";
import Moduly from "./components/Moduly";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <BrowserRouter>
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
