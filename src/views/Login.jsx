
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim().toLowerCase();
    const password = event.target.password.value;

    // Get Registered User Data
    const storedData = localStorage.getItem(email);

    if (storedData) {

      const userData = JSON.parse(storedData);

      // Check Email and Password
      if (userData.password === password) {

        // Save Current Login User
        localStorage.setItem(
          "currentUser",
          JSON.stringify(userData)
        );

        // Success Message
        alert("Welcome " + userData.name + "! Login Successful.");

        navigate("/", { replace: true });

      } else {

        alert("Email or Password is incorrect");

      }

    } else {

      alert("User not registered. Please register first.");

    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <div className="login-image">

          <img src="/images/farmer.png" alt="Farmer" />

        </div>

        <div className="login-content">

          <h2>Welcome Back!</h2>

          <p>Login to your FarmConnect Account</p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit" className="login-btn">
              Login Now
            </button>

          </form>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Register Now</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
