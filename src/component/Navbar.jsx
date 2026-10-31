import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button/button";
import logo from "./icon-images/connect.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="Farm-Connect" className="logo-icon" />

        <h2 className="logo-name">
          <span>Farm-Connect</span>
        </h2>
      </NavLink>

      {isAuthenticated ? (
        <>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/workers">Workers</NavLink>
            <NavLink to="/equipment">Equipment</NavLink>
            <NavLink to="/transport">Transport</NavLink>
            <NavLink to="/bookings">Bookings</NavLink>
          </div>

          <div className="nav-buttons">
            <Button text="Logout" type="outline" onClick={handleLogout} />
          </div>
        </>
      ) : (
        <div className="nav-buttons">
          <Button text="Login" link="/login" type="outline" />
          <Button text="Register" link="/register" type="primary" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;