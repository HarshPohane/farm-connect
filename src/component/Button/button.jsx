import "./button.css";

function Button({
  children,
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const content = children ?? text;

  return (
    <button
      type={type}
      className={`custom-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;