import { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "DECREMENT":
      return state - action.payload;
    case "INCREMENT":
      return state + action.payload;
    case "DEFINE":
      return action.payload;
    default:
      return state;
  }
}
function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "DECREMENT", payload: step });
  };

  const inc = function () {
    dispatch({ type: "INCREMENT", payload: step });
  };

  const defineCount = function (e) {
    dispatch({ type: "DEFINE", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
