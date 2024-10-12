"use client";

import { useEffect, useState, useTransition } from "react";

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
      <button
        onClick={async () => {
          startTransition(async () => {
            setCounter(await makeCounter());
          });
        }}
        disabled={isPending}
      >
        Download Counter From Server
      </button>
      <div>
        {isPending && "Downloading Counter ..."}
        {counter}
      </div>
    </div>
  );
}
