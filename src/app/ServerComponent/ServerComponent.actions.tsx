"use server";

import { Counter } from "@/components";

export async function fn({ value }: { value: string }) {
  return async () => {
    "use server";

    return `Server function: '${value}'`;
  };
}

export async function makeCounter() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <Counter />;
}
