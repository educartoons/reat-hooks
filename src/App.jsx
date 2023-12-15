import { useState, useReducer } from "react";

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 10;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimun reached" : null,
      };
    }
    case "Increment5": {
      const newCount = state.count + payload;
      const hasError = newCount > 10;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    default:
      return state;
  }
}

export default function App() {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h2>Count {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch({ type: "Increment5", payload: value })}>
        Increment
      </button>
      <p>{state.error}</p>
    </div>
  );
}
