/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { InputCheckbox, InputSearch, Select } from "./Form";

export default function SearchBar({
  categories,
  setSearchTerm,
  setCategory,
  setInStockOnly,
}) {
  return (
    <form className="flex flex-col items-center justify-center space-y-3">
      <InputSearch
        id="search"
        label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Select
        id="category"
        label="Category"
        options={categories}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <InputCheckbox
        id="in-stock-only"
        label="Only show products in stock"
        onChange={(event) => {
          setInStockOnly(event.target.checked);
        }}
      />
    </form>
  );
}

SearchBar.PropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired,
};
