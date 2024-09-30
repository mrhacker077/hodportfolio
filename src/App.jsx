import React,{useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;