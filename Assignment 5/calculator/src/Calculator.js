import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [display, setDisplay] = useState("");
    const [error, setError] = useState("");

    const handleClick = (value) => {
        setError("");

        if (value === "AC") {
            setDisplay("");
            return;
        }

        if (value === "=") {
            try {
                setDisplay(String(eval(display)));
            } catch {
                setError("Invalid Expression");
            }
            return;
        }

        setDisplay((prev) => prev + value);
    };

    return (
        <div className="calculator">
            <div className="screen">
                {display || "0"}
            </div>

            <div className="keys">
                <button className="control" onClick={() => handleClick("AC")}>AC</button>
                <button onClick={() => handleClick("/")}>÷</button>
                <button onClick={() => handleClick("*")}>×</button>
                <button onClick={() => handleClick("-")}>−</button>

                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("+")}>+</button>

                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button className="equal" onClick={() => handleClick("=")}>=</button>

                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>

                <button className="zero" onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
            </div>

            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Calculator;
