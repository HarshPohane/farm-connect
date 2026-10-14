import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  text = "Click Here",
  link,
  type = "primary",
  onClick,
  htmlType = "button",
  disabled = false
}) {
  const buttonClass = `custom-btn ${type}`;

  if (link) {
    return (
      <Link to={link} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={htmlType}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;