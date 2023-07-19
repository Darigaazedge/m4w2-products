import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders correctly", async () => {
  render(<App />);
  await expect(screen.getByText("Football $49.99")).toBeInTheDocument();
});
