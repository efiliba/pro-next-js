import Counter from "@/app/Counter";

import ServerComponentClient from "./ServerComponent.client";

export default function ServerComponentServer() {
  async function fn({ value }: { value: string }) {
    "use server";

    return async () => {
      "use server";

      return `Server function: '${value}'`;
    };
  }

  async function makeCounter() {
    "use server";
    return <Counter />;
  }

  return (
    <div>
      <h1>Server</h1>
      <ServerComponentClient fn={fn} makeCounter={makeCounter} />
    </div>
  );
}
