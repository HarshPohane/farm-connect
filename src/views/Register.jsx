import './Register.css';

function Register() {
  return (
    <div className="auth-page">
      <h1>Create Account</h1>
      <form className="auth-form">
        <label>
          Full Name
          <input type="text" placeholder="Your full name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Choose a password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
