import "./App.css";
import Greeting from "./components/Greeting.jsx";
import BigCats from "./components/BigCats.jsx";
import "./BigCats.css";
import Emoji from "./components/Emoji.jsx";
import Calculator from "./components/Calculator.jsx";
import "./Calculator.css";

function App() {
  return (
    <>
      <Greeting name="User" />
      <div className="App">
        <BigCats />
        <div>
          <h1>Welcome to the Emoji App!</h1>
          <Emoji /> {/* Render the Emoji component here */}
        </div>
        <div className="App">
          <h1>React Calculator</h1>
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;
