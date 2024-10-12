"use client";

import { useEffect, useState } from "react";

export default function ServerComponentClient({
  fn,
}: {
  fn: (args: { value: string }) => Promise<() => Promise<string>>;
}) {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const f = await fn({ value: "client value" });
      setData(await f());
    })();
  }, [fn]);

  return <div>{data}</div>;
}
