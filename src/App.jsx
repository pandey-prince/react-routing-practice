import "./App.css";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Navbar";

import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
