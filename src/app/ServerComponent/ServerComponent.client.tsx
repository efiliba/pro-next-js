"use client";

import { useEffect, useState } from "react";

export default function ServerComponentClient({
  fn,
  makeCounter,
}: {
  fn: (args: { value: string }) => Promise<() => Promise<string>>;
  makeCounter: () => Promise<React.ReactNode>;
}) {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState<React.ReactNode>();

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
          const counter = await makeCounter();
          setCounter(counter);
        }}
      >
        Download Counter From Server
      </button>
      {counter}
    </div>
  );
}
