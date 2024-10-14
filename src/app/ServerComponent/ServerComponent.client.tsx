"use client";

import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components";

import { fn, makeCounter } from "./ServerComponent.actions";

export default function ServerComponentClient() {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState<React.ReactNode>();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      const f = await fn({ value: "client value" });
      setData(await f());
    })();
  }, []);

  return (
    <div>
      <div>{data}</div>
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
