import { render, screen } from "@testing-library/react";

import PokemonListClient from "./PokemonList.client";

describe("PokemonList Client", () => {
  it("should render the first page", () => {
    render(<PokemonListClient pokemon={[]} getPage={jest.fn()} />);

    expect(screen.getByText("Pokemon List - Page 1")).toBeDefined();
  });
});
