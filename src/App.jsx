import "./App.css";
import Comożemy from "./components/Comożemy";
import DlaKogo from "./components/DlaKogo";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Odkryj from "./components/Odkryj";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Odkryj />
      <DlaKogo />
      <Comożemy />
      <Footer />
    </>
  );
}

export default App;
