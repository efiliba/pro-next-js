"use client";

import { useEffect, useState, useTransition } from "react";

export default function ServerComponentClient({
  fn,
  makeCounter,
}: {
  fn: (args: { value: string }) => Promise<() => Promise<string>>;
  makeCounter: () => Promise<React.ReactNode>;
}) {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState<React.ReactNode>();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      const f = await fn({ value: "client value" });
      setData(await f());
    })();
  }, [fn]);

  return (
    <div>
      <div>{data}</div>
      <button
        onClick={async () => {
          startTransition(async () => {
            const counter = await makeCounter();
            setCounter(counter);
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
