import PropTypes from "prop-types";

// Button component to render individual calculator buttons
function Button({ value, onClick }) {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
