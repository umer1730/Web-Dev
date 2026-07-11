import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import Register from "./page/registration";
import Dashboard from "./page/logout";
import Login from "./page/login";


function App() {
  return (
    <>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;