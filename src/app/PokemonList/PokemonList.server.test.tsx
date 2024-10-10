import "isomorphic-fetch";

import { render, screen } from "@testing-library/react";

import PokemonListServer from "./PokemonList.server";

// window.fetch = jest.fn().mockImplementation(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => ({
//       results: [{ id: 1, name: "bulbasaur" }],
//     }),
//   })
// );

describe("PokemonList Server", () => {
  it("should render an Async RSC page", async () => {
    render(await PokemonListServer());

    expect(await screen.findByText("bulbasaur")).toBeDefined();
  });
});
