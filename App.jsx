import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <div className="main-container">
        <Sidebar />

        <div className="content">
          <Hero />
          <About />
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;