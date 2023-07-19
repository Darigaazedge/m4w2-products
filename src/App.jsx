import { useState } from "react";
import ProductList from "./components/ProductList/ProuctList";
import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const products = useFetch(BASE_URL);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-black">Product App</h1>
      <SearchBar
        categories={[...new Set(products.map((product) => product.category))]}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        setInStockOnly={setInStockOnly}
      />
      ;
      <ProductList
        products={products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (category === "all" || product.category === category) &&
            (!inStockOnly || product.stocked)
        )}
      />
      ;
    </>
  );
}

export default App;
