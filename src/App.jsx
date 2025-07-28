// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Comożemy from "./components/Comożemy";
// import DlaKogo from "./components/DlaKogo";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Odkryj from "./components/Odkryj";
// import Footer from "./components/Footer";
// import Najczęściej from "./components/Najczęściej";
// import JakZacząć from "./components/JakZacząć";
// import Dlaczego from "./components/Dlaczego";
// import Moduły from "./components/Moduły";

// function App() {
//   return (
//     <>

//       <BrowserRouter>
//       <Header />
//       <Hero />
//       <Odkryj />
//       <DlaKogo />
//       <Comożemy />
//       <Dlaczego />
//       <JakZacząć />
//       <Najczęściej />
//       <Footer />
//         <Routes>
//           <Route path="/strona" element={<Moduły />}/>

//         </Routes>

//       </BrowserRouter>

//     </>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comożemy from "./components/Comożemy";
import DlaKogo from "./components/DlaKogo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Odkryj from "./components/Odkryj";
import Footer from "./components/Footer";
import Najczęściej from "./components/Najczęściej";
import JakZacząć from "./components/JakZacząć";
import Dlaczego from "./components/Dlaczego";
import Moduły from "./components/Moduły";

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
              <Comożemy />
              <Dlaczego />
              <JakZacząć />
              <Najczęściej />
            </>
          }
        />

        <Route path="/strona" element={<Moduły />} />
        <Route path="/dlakogo" element={<DlaKogo />} />
        <Route path="/działa" element={<JakZacząć />} />
        <Route path="/dlaczego" element={<Dlaczego />} />
        <Route path="/moduly" element={<Moduły />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
