import { NavLink } from "react-router-dom";
import Button from "./Button/button";
import logo from "./icon-images/connect.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="Farm-Connect" className="logo-icon" />

        <h2 className="logo-name">
          <span>Farm-Connect</span>
        </h2>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workers">Workers</NavLink>
        <NavLink to="/equipment">Equipment</NavLink>
        <NavLink to="/transport">Transport</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
      </div>

      <div className="nav-buttons">
        <Button text="Login" link="/login" type="outline" />
        <Button text="Get Started" link="/register" type="primary" />
      </div>
    </nav>
  );
}

export default Navbar;