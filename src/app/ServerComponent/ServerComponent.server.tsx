import ServerComponentClient from "./ServerComponent.client";

export default function ServerComponentServer() {
  async function fn({ value }: { value: string }) {
    "use server";

    return async () => {
      "use server";

      return `Server function: '${value}'`;
    };
  }

  return (
    <div>
      <h1>Server</h1>
      <ServerComponentClient fn={fn} />
    </div>
  );
}
