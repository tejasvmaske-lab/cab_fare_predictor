import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="text">{text}</div>
    </button>
  );
};

export default Button;