// AddCatForm.js

import { useState } from "react";
import PropTypes from "prop-types";

const AddCatForm = ({ addCat }) => {
  // Local state to manage form input values
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new cat only if all fields are filled
    if (name && latinName && image) {
      const newCat = { name, latinName, image };
      addCat(newCat); // Call the addCat function passed down as a prop
      setName("");
      setLatinName("");
      setImage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-cat-form">
      <h2>Add a New Big Cat</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Latin Name:</label>
        <input
          type="text"
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Cat</button>
    </form>
  );
};
AddCatForm.propTypes = {
  addCat: PropTypes.func.isRequired,
};

export default AddCatForm;
