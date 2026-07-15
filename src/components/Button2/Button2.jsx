import './Button2.css';

const Button2 = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="transition" />
      <span className="gradient" />
      <span className="label">{text}</span>
    </button>
  );
};

export default Button2;