"use client";

import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components";

import { add, makeCounter } from "./ServerComponent.actions";

export function ServerComponentClient() {
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState<React.ReactNode>();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      const total = await add({ a: 5, b: 7 });
      setSum(await total());
    })();
  }, []);

  return (
    <div>
      <div>{sum}</div>
      <Button
        onClick={async () => {
          startTransition(async () => {
            setCounter(await makeCounter());
          });
        }}
        disabled={isPending}
      >
        Download Counter From Server
      </Button>
      <div>
        {isPending && "Downloading Counter ..."}
        {counter}
      </div>
    </div>
  );
}
