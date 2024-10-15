"use server";

import { Counter } from "@/components";

export async function add({ a, b }: { a: number; b: number }) {
  return async () => {
    "use server";

    return a + b;
  };
}

export async function makeCounter() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <Counter />;
}
