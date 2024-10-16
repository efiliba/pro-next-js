"use server";

import { AnimateOnScroll } from "@/components";

export async function add({ a, b }: { a: number; b: number }) {
  return async () => {
    "use server";

    return a + b;
  };
}

export async function makeComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <AnimateOnScroll />;
}
