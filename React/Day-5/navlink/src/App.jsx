import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";

function App() {
  return (
    <>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;