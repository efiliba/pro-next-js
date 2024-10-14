"use client";

import { useState } from "react";

import { Button } from "@/components/ui";

export function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>{" "}
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
}
