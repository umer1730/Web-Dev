import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;