import { useState } from "react";
import Button from "./Button";

function Calculator() {
  // State to store the numbers and result
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  // Handle number and operator input
  const handleInput = (value) => {
    if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
    } else {
      // For numeric input
      if (operator === "") {
        setInput1(input1 + value);
      } else {
        setInput2(input2 + value);
      }
    }
  };

  // Handle calculation logic
  const calculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let calcResult;

    switch (operator) {
      case "+":
        calcResult = num1 + num2;
        break;
      case "-":
        calcResult = num1 - num2;
        break;
      case "*":
        calcResult = num1 * num2;
        break;
      case "/":
        calcResult = num2 === 0 ? "Error" : num1 / num2;
        break;
      default:
        calcResult = "Error";
    }
    setResult(calcResult);
  };

  // Handle clear logic
  const clear = () => {
    setInput1("");
    setInput2("");
    setOperator("");
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>
          {input1} {operator} {input2}
        </div>
        <div>{result !== null ? `= ${result}` : ""}</div>
      </div>

      <div className="button-row">
        {["1", "2", "3"].map((value) => (
          <Button key={value} value={value} onClick={handleInput} />
        ))}
      </div>
      <div className="button-row">
        {["4", "5", "6"].map((value) => (
          <Button key={value} value={value} onClick={handleInput} />
        ))}
      </div>
      <div className="button-row">
        {["7", "8", "9"].map((value) => (
          <Button key={value} value={value} onClick={handleInput} />
        ))}
      </div>
      <div className="button-row">
        {["0", "+", "-", "*", "/"].map((value) => (
          <Button key={value} value={value} onClick={handleInput} />
        ))}
      </div>
      <div className="button-row">
        <button className="calculator-button" onClick={calculate}>
          =
        </button>
        <button className="calculator-button" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
