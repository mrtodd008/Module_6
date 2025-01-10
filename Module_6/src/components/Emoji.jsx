// Emoji.jsx
import { useState } from "react";

const Emoji = () => {
  // Define the state for the emoji
  const [mood, setMood] = useState("happy"); // 'happy' is the initial state

  // Function to toggle between moods
  const toggleMood = () => {
    setMood((prevMood) => (prevMood === "happy" ? "sad" : "happy"));
  };

  // Render the emoji based on the current mood
  return (
    <div>
      <p>{mood === "happy" ? "😊" : "😞"}</p>{" "}
      {/* Render emoji based on the mood */}
      <button onClick={toggleMood}>Change Mood</button>{" "}
      {/* Button to change mood */}
    </div>
  );
};

export default Emoji;
