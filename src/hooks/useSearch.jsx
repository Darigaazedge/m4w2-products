import { useState } from "react";

export default function useSearch(products) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProudcts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "all" || product.category === category) &&
      (!inStockOnly || product.stocked)
  );

  return {
    setSearchTerm,
    setCategory,
    setInStockOnly,
    filteredProudcts,
  };
}
