import './Login.css';

function Login() {
  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form className="auth-form">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
