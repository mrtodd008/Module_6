// SingleCat.js
import PropTypes from "prop-types";

const SingleCat = ({ cat }) => {
  return (
    <li className="single-cat">
      <img src={cat.image} alt={cat.name} className="cat-image" />
      <h2>{cat.name}</h2>
      <p>
        <strong>Latin Name:</strong> {cat.latinName}
      </p>
    </li>
  );
};

SingleCat.propTypes = {
  cat: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    latinName: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleCat;
