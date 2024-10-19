"use client";

import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components";
import { add, makeComponent } from "./ServerComponent.actions";

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
            setCounter(await makeComponent());
          });
        }}
        disabled={isPending}
      >
        Download Component From Server
      </Button>
      <div>
        {isPending && "Downloading Component ..."}
        {counter}
      </div>
    </div>
  );
}
