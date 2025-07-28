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
// import Moduły from "./components/Moduły";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Odkryj />
      <DlaKogo />
      <Comożemy />
      <Dlaczego />
      <JakZacząć />
      <Najczęściej />
      <Footer />

      {/* <Moduły /> */}
    </>
  );
}

export default App;
