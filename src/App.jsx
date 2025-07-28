import "./App.css";
import Comożemy from "./components/Comożemy";
import DlaKogo from "./components/DlaKogo";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Odkryj from "./components/Odkryj";
import Footer from "./components/Footer";
import Najczęściej from "./components/Najczęściej";
import JakZacząć from "./components/JakZacząć";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Odkryj />
      <DlaKogo />
      <Comożemy />
      <JakZacząć />
      <Najczęściej />
      <Footer />
    </>
  );
}

export default App;
