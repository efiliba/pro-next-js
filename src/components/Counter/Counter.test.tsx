import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  it("should increment the counter", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByText("Increment"));

    expect(screen.getByTestId("count")).toHaveTextContent("Count: 2");
  });
});
