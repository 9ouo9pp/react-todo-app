import "../styles/button.css";

const Button = ({ label, color = "#ccceee", onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color
      }}
      className="btn"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
