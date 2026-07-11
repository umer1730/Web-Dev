import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>
      
      <NavLink to="/contact">
        Contact
      </NavLink>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/logout">
        Dashboard
      </NavLink>
      
    </nav>
  );
}

export default Navbar;