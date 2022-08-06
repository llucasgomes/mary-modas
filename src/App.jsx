//imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import "./App.css";

//componentes
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contato";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
