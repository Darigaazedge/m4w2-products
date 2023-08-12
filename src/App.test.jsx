import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fetch from "node-fetch";
import { expect, test } from "vitest";
import data from "../db.json";
import App from "./App";

global.fetch = fetch;

test("renders correctly", async () => {
  const appRender = render(<App />);
  expect(appRender).toMatchSnapshot();
});

it("loads and displays products", async () => {
  render(<App />);

  const products = await screen.findAllByRole("listitem");
  expect(products).toHaveLength(data.products.length);
});

describe("Search", () => {
  it("filters by search query", async () => {
    // Arrange
    const query = "a";
    const expectedProducts = data.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    const user = userEvent.setup();
    render(<App />);
    // Act
    const searchInput = screen.getByRole("searchbox");
    await screen.findAllByRole("listitem");

    await user.type(searchInput, query);

    const actualProducts = await screen.findAllByRole("listitem");

    // Assert
    expect(actualProducts).toHaveLength(expectedProducts.length);
  });
  it("filters by category", async () => {
    const category = "Electronics";

    const user = userEvent.setup();

    const expectedProducts = data.products.filter(
      (product) => product.category === category
    );

    render(<App />);

    const categorySelect = await screen.findByRole("combobox", "category");

    await screen.findAllByRole("listitem");

    await user.selectOptions(categorySelect, category);

    const actualProducts = screen.getAllByRole("listitem");

    expect(actualProducts).toHaveLength(expectedProducts.length);
  });
  it("filters by in stock only", async () => {
    const inStock = true;

    const user = userEvent.setup();

    const expectedProducts = data.products.filter(
      (product) => product.stocked === inStock
    );

    render(<App />);

    const inStockCheckBox = await screen.findByRole("checkbox");

    await screen.findAllByRole("listitem");

    await user.click(inStockCheckBox);

    const actualProducts = screen.getAllByRole("listitem");

    expect(actualProducts).toHaveLength(expectedProducts.length);
  });
});
