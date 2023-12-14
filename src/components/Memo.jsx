import { useState, useMemo } from "react";

import { initialItems } from "./utils";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => {
    return items.find((item) => item?.isSelected);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      {<h2>Selected Item: {selectedItem?.id}</h2>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
