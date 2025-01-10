// Greeting.jsx

import PropTypes from "prop-types";

const Greeting = ({ name, children }) => {
  const greetingMessage = children || `Hello ${name || "World"}`;

  return <h1>{greetingMessage}</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Greeting;
