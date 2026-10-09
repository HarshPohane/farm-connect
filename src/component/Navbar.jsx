import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        🌱 Farm-Connect
      </Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/workers">Workers</NavLink>
        <NavLink to="/equipment">Equipment</NavLink>
        <NavLink to="/transport">Transport</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
        <NavLink to="/login" className="login-btn">Login</NavLink>
        <NavLink to="/register" className="register-btn">Register</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;