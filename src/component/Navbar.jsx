import { Link, NavLink } from "react-router-dom";
import logo from "./icon-images/connect.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Farm-Connect Logo" />
        <span>Farm-Connect</span>
      </Link>

    
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