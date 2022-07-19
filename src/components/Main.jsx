import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Uses from "../pages/Uses/Uses";
import Contact from "../pages/Contact/Contact";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Uses" element={<Uses />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Main;
