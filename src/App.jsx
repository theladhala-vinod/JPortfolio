import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
