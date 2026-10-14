import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src="/images/logo.png" alt="FarmConnect logo" />
        <span>FarmConnect</span>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workers">Workers</NavLink>
        <NavLink to="/equipment">Equipment</NavLink>
        <NavLink to="/transport">Transport</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
      </div>

      <div className="navbar-actions">
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>

        <NavLink to="/register" className="register-link">
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;