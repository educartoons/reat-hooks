import { useEffect, useState } from "react";

function Child() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("enviar datos al servidor");
    return () => {
      console.log("Este componente fue removido");
    };
  }, [count]);

  return (
    <h2>
      I am the child {count}{" "}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </h2>
  );
}

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h2>
        Component: Child{" "}
        <button onClick={() => setShow(!show)}>show/hide Child</button>
      </h2>
      {show && <Child />}
    </div>
  );
}
