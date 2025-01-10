// BigCats.js

import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const initialCats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "path_to_image1.jpg",
  },
  { name: "Cougar", latinName: "Puma concolor", image: "path_to_image2.jpg" },
  { name: "Jaguar", latinName: "Panthera onca", image: "path_to_image3.jpg" },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "path_to_image4.jpg",
  },
  { name: "Lion", latinName: "Panthera leo", image: "path_to_image5.jpg" },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "path_to_image6.jpg",
  },
  { name: "Tiger", latinName: "Panthera tigris", image: "path_to_image7.jpg" },
];

const BigCats = () => {
  const [cats, setCats] = useState(initialCats);
  const [sortedCats, setSortedCats] = useState(cats);
  const [filterText, setFilterText] = useState("");

  // Add a new cat to the list
  const addCat = (newCat) => {
    const updatedCats = [...cats, newCat];
    setCats(updatedCats);
    setSortedCats(updatedCats);
  };

  // Handle sorting of cats by name
  const handleSort = () => {
    const sorted = [...sortedCats].sort((a, b) => a.name.localeCompare(b.name));
    setSortedCats(sorted);
  };

  // Handle filtering of cats based on input text
  const handleFilter = () => {
    const filtered = cats.filter((cat) =>
      cat.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setSortedCats(filtered);
  };

  // Handle change in the filter input field
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="big-cats">
      <h1>Big Cats of the World</h1>

      {/* Filter input */}
      <div>
        <input
          type="text"
          placeholder="Search cats..."
          value={filterText}
          onChange={handleFilterChange}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      {/* Sort button */}
      <div>
        <button onClick={handleSort}>Sort Alphabetically</button>
      </div>

      {/* AddCatForm */}
      <AddCatForm addCat={addCat} />

      <ul>
        {sortedCats.map((cat) => (
          <SingleCat key={cat.name} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
