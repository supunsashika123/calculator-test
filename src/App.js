import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("1");
  const [number2, setNumber2] = useState("1");
  const [methodIcon, setMethodIcon] = useState("");
  const [totalCalculationsCount, setTotalCalculationsCount] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [number1, number2]);

  const calculate = (method) => {
    setError(false);

    if (!number1 || !number2) {
      setError(true);

      return;
    }

    setTotalCalculationsCount(totalCalculationsCount + 1);

    switch (method) {
      case "ADD":
        setMethodIcon("+");
        setResult(+number1 + +number2);
        break;
      case "SUB":
        setMethodIcon("-");
        setResult(+number1 - +number2);
        break;
      case "MULTIPLY":
        setMethodIcon("x");
        setResult(+number1 * +number2);
        break;
      case "DIVIDE":
        setMethodIcon("/");
        setResult((+number1 / +number2).toFixed(4).replace(/[.,]0000$/, ""));
        break;

      default:
        break;
    }
  };

  const handleResetClick = () => {
    setTotalCalculationsCount(0);
    setResult("");
    setNumber1("");
    setNumber2("");
    setMethodIcon("");
    setError(false);
  };

  return (
    <div className="flexBox centeredBox">
      <div className="wrapper">
        <h2>Total Operations Performed: {totalCalculationsCount}</h2>
        <div className="card">
          <div className="flexBox textBoxWrapper">
            <input
              onChange={(e) => setNumber1(e.target.value)}
              className="txtBox"
              type={"number"}
              value={number1}
              placeholder="Eg: 1"
            />
            <div className="methodIconBox">{methodIcon}</div>
            <input
              onChange={(e) => setNumber2(e.target.value)}
              className="txtBox"
              type={"number"}
              value={number2}
              placeholder="Eg: 2"
            />
          </div>

          {error ? (
            <div className="errorText">Add 2 numbers in the text box!</div>
          ) : null}

          <div className="flexBox actionButtonWrapper">
            <button className="btn" onClick={() => calculate("ADD")}>
              +
            </button>
            <button className="btn" onClick={() => calculate("SUB")}>
              -
            </button>
            <button className="btn" onClick={() => calculate("MULTIPLY")}>
              *
            </button>
            <button className="btn" onClick={() => calculate("DIVIDE")}>
              /
            </button>
          </div>

          <div className="flexBox resultSectionWrapper">
            <button className="resetBtn" onClick={() => handleResetClick()}>
              Reset
            </button>
            {result !== "" ? (
              <div className="resultText">Result: {result}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
