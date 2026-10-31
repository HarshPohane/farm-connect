
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value.trim().toLowerCase();
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    // Check Password
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    // Check Existing User
    const existingUser = localStorage.getItem(email);

    if (existingUser) {
      alert("This email is already registered. Please login.");
      return;
    }

    // Store User Data
    const userData = {
      name: name,
      email: email,
      phone: phone,
      password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));

    // Save Current Login User
    localStorage.setItem("currentUser", JSON.stringify(userData));

    // Success Message
    alert("Welcome " + name + "! Registration Successful.");

    navigate("/", { replace: true });
  };

  return (
    <div className="register-container">

      <div className="register-box">

        <div className="register-image">

          <img src="/images/farmer.png" alt="Farmer" />

          <h2>Join FarmConnect</h2>

          <p>
            Connecting Farmers with Workers,
            Equipment and Transport.
          </p>

        </div>

        <div className="register-content">

          <h2>Create Account</h2>

          <p>Register to start using FarmConnect</p>

          <form onSubmit={handleRegister}>

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Enter a valid 10 digit phone number"
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              minLength="6"
              required
            />

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              minLength="6"
              required
            />

            <button type="submit" className="register-btn">
              Create Account
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login Now</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
