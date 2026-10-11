
import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) {
  const className = `custom-button ${variant}`;

  // Navigation button
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // Normal button
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
